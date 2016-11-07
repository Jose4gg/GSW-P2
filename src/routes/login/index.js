/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Login from './Login';
import Pro from './profile';
import React from 'react';
const title = 'Log In';

export default {

  path: '/login',

  action() {
    return {
      title,
      component: <Login title={title} />,
    };
  },

};

const Profile = {
  path: '/Profile',
  action() {
    return {
      title: "Profile",
      component: <Pro />,
    };
  }
};

export {Profile}