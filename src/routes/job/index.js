/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Create from './CreateJob';
import React from 'react';

const title = 'Create a Job';

export default {

  path: '/Job/Create',
  action() {
    return {
      title,
      component: <Create/>,
    };
  },

};
