/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {Col, Row} from 'react-bootstrap'
import { Paper, RaisedButton, TextField } from 'material-ui';
import React, { PropTypes } from 'react';

import Layout from '../../components/Layout';
import Profile from './img'
import s from './Home.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const container = {
    padding: 15,
}
function Home({ news }) {
    return (
        <Layout>
            <Row>
                <Col>
                    <Paper zDepth={1} style={{padding: 10}}>
                        <Col>
                            <TextField
                                name="search"
                                floatingLabelText="Ingresa alguna posicion"
                                />
                            <RaisedButton
                                primary={true}
                                label="Buscar"
                                />
                        </Col>
                    </Paper>
                    <Profile></Profile>
                </Col>
            </Row>
        </Layout>
    );
}


export default Home;
