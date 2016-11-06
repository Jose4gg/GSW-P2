/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Col, Grid } from 'react-bootstrap'
import React, { PropTypes } from 'react';

import App from '../../Stores/App'
import { AppBar } from 'material-ui'
import Drawer from '../Header/Drawer'
import Feedback from '../Feedback';
import Footer from '../Footer';
import Header from '../Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {observer} from 'mobx-react'
import s from './Layout.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Layout = observer(({ children }) =>
    <MuiThemeProvider>
      <span>
        <AppBar
          title="Posiciones"
          onLeftIconButtonTouchTap={() => App.toggleDrawer()}
          />
          <Drawer></Drawer>   
        <Grid>
          {React.Children.only(children)}
        </Grid>
      </span>
    </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(s)(Layout);
