import { Drawer, MenuItem } from 'material-ui'

import App from '../../Stores/App'
import Link from '../Link';
import React from 'react';
import { observer } from 'mobx-react';
import {trans} from '../../Stores/Dictionary';

const Drawer2 = observer((props) =>
    <Drawer open={App.drawer} docked={false}
         onRequestChange={(open) => App.setDrawer(open)}
    >
        <Link to="/"><MenuItem>{trans.key.LAYOUT.HOME()}</MenuItem></Link>
        <Link to="/Job/Create"><MenuItem>{trans.key.LAYOUT.POST_A_JOB()}</MenuItem></Link>
        <Link to="/login"><MenuItem>{trans.key.LAYOUT.LOGIN()}</MenuItem></Link>
        <Link to="/Profile"><MenuItem>{trans.key.LAYOUT.PROFILE()}</MenuItem></Link>
    </Drawer>
);


export default Drawer2;