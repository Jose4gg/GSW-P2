import { Drawer, MenuItem } from 'material-ui'

import App from '../../Stores/App'
import React from 'react';
import { observer } from 'mobx-react';

const Drawer2 = observer((props) =>
    <Drawer open={App.drawer} docked={false}
         onRequestChange={(open) => App.setDrawer(open)}
    >
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
);


export default Drawer2;