/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';

import { auth, port } from './config';
import models, { Category, Job } from './data/models';

import App from './components/App';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import Html from './components/Html';
import PrettyError from 'pretty-error';
import RSS from 'rss'
import React from 'react';
import ReactDOM from 'react-dom/server';
import UniversalRouter from 'universal-router';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import errorPageStyle from './routes/error/ErrorPage.css';
import express from 'express';
import expressGraphQL from 'express-graphql';
import expressJwt from 'express-jwt';
import { getAllPost } from './core/utils'
import jwt from 'jsonwebtoken';
import passport from './core/passport';
import path from 'path';
import routes from './routes';
import schema from './data/schema';
import xml from 'xml'

const app = express();
var corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.options('*', cors(corsOptions)); // include before other routes
app.use(cors(corsOptions));
//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
// Authentication
// -----------------------------------------------------------------------------
app.use(expressJwt({
  secret: auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token,
}));

app.use(passport.initialize());


app.get('/login/facebook',
  passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false })
);
app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: false, secure: false });
    res.redirect('/');
  }
);

app.get('/rssJson/:token', (req, res, next) => {
  var feed = new RSS({
    title: 'JOBS',
    feed_url: 'http://localhost.com/rss',
    site_url: 'http://localhost.com',
    language: ['en', 'es'],
  });
  
  models.sync().catch(err => console.error(err.stack)).then(() => {
    Job.findAll({}).then(function (data) {
      data.map(a => feed.item({
        title: a.Job,
        description: a.Description,
        url: 'http://localhost:3000/Job/View/' + a.id, // link to the item
        author: a.company, // optional - defaults to feed author property
        date: a.createdAt, // any format that js Date can parse.
      }))
      res.json(feed)
    })
  });
});
app.get('/rss/:token', (req, res, next) => {
  var feed = new RSS({
    title: 'JOBS',
    feed_url: 'http://localhost.com/rss',
    site_url: 'http://localhost.com',
    language: ['en', 'es'],
  });
  
  models.sync().catch(err => console.error(err.stack)).then(() => {
    Job.findAll({}).then(function (data) {
      data.map(a => feed.item({
        title: a.Job,
        description: a.Description,
        url: 'http://localhost:3000/Job/View/' + a.id, // link to the item
        author: a.company, // optional - defaults to feed author property
        date: a.createdAt, // any format that js Date can parse.
      }))
      res.set('Content-Type', 'text/xml');
      res.send(feed.xml());
    })
  });
});
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: { request: req },
  pretty: process.env.NODE_ENV !== 'production',
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set();
    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
    };

    const route = await UniversalRouter.resolve(routes, {
      path: req.path,
      query: req.query,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
data.children = ReactDOM.renderToString(<App context={context}>{route.component}</App>);
data.style = [...css].join('');
data.script = assets.main.js;
data.chunk = assets[route.chunk] && assets[route.chunk].js;
const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

res.status(route.status || 200);
res.send(`<!doctype html>${html}`);
  } catch (err) {
  next(err);
}
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
      >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
models.sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
  });
});
/* eslint-enable no-console */
