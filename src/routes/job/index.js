/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import A from './View'
import Create from './CreateJob';
import Edit from './EditJob'
import J from './JobDetail';
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


const JobDetail = {
   path: '/Job/PreviewJob',
  action() {
    return {
      title: "PreviewJob",
      component: <J/>,
    };
  },
}

const Viewer = {
   path: '/Job/View/:id',
  action({params}) {
    return {
      title: "PreviewJob",
      component: <A id={params.id}/>,
    };
  },
}
const ViewerEdit = {
   path: '/Job/View/:id/:secret',
  action({params}) {
    return {
      title: "PreviewJob",
      component: <A id={params.id} secret={params.secret}/>,
    };
  },
}
const EditJob = {
   path: '/Job/Edit/:id/:secret',
  action({params}) {
    return {
      title: "Edit Job",
      component: <Edit id={params.id} Secret={params.secret}/>,
    };
  },
}


export {JobDetail, Viewer, ViewerEdit, EditJob};