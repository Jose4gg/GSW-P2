/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Col, Grid } from 'react-bootstrap'
import React, { PropTypes } from 'react';
import { trans } from '../../Stores/Dictionary'
import App from '../../Stores/App'
import Drawer from '../Header/Drawer'
import Feedback from '../Feedback';
import Footer from '../Footer';
import Header from '../Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { observer } from 'mobx-react'
import s from './Layout.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Layout = observer(({ children }) =>
  <MuiThemeProvider>
    <span>
      <AppBar
        title={trans.key.LAYOUT.TITLE()}
        onLeftIconButtonTouchTap={() => App.toggleDrawer()}
        iconElementRight={<IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
          <MenuItem primaryText="English" onClick={() => trans.setLanguage("EN")} />
          <MenuItem primaryText="Español" onClick={()=> trans.setLanguage("ES")} />
        </IconMenu>}
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
