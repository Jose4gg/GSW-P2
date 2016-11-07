import { Drawer, MenuItem } from 'material-ui'

import App from '../../Stores/App'
import React from 'react';
import { observer } from 'mobx-react';
import Link from '../Link';

const Drawer2 = observer((props) =>
    <Drawer open={App.drawer} docked={false}
         onRequestChange={(open) => App.setDrawer(open)}
    >
        <Link to="/"><MenuItem>Inicio</MenuItem></Link>
        <Link to="/Job/Create"><MenuItem>Crear Posicion</MenuItem></Link>
        <Link to="/login"><MenuItem>Entrar al sistema</MenuItem></Link>
    </Drawer>
);


export default Drawer2;