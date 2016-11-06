/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';

import {AppBar} from 'material-ui'
import Feedback from '../Feedback';
import Footer from '../Footer';
import {Grid} from 'react-flexbox-grid'
import Header from '../Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import s from './Layout.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

function Layout({ children }) {
  return (
    <MuiThemeProvider> 
      <span>
        <AppBar
          title="Posiciones"
        /> 
        <Grid>
          {React.Children.only(children)}
        </Grid>
      </span>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(s)(Layout);
