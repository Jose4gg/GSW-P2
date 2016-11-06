/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Col, Row } from 'react-flexbox-grid'
import { Paper, RaisedButton, TextField } from 'material-ui';
import React, { PropTypes } from 'react';

import Layout from '../../components/Layout';
import s from './Home.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const container = {
    padding: 15,
}

function Home({ news }) {
    return (
        <Layout>
            <Paper zDepth={1}>
                <Row>
                    <TextField
                        name="search"
                        floatingLabelText="Ingresa alguna posicion"
                        />
                    <RaisedButton
                        primary={true}
                        label="Buscar"
                        />
                </Row>
            </Paper>
        </Layout>
    );
}


export default Home;
