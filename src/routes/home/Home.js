/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Col, Row } from 'react-bootstrap'
import { Paper, RaisedButton, TextField } from 'material-ui';
import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../../components/Layout';
import Profile from './img'
import s from './Home.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Table from './JobsTable';

const container = {
    padding: 15,
}
function Home(props) {
    if (!props.data) return <span />
    if (props.data.loading) return <span />
    if (!props.data.categories) return <span />
    return (
        <Layout>
            <Row>
                <Col>
                    <Paper zDepth={1} style={{ padding: 10 }}>
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
                    <br />
                    {props.data.categories.map(function (object, i) {
                        return (
                            <span key={i}>
                                <Paper zDepth={1} style={{ padding: 10 }} key={i}>
                                    <h6>{object.description}</h6>
                                    <hr />
                                    <Table
                                        jobs={object.jobs}
                                        />
                                </Paper>
                                <hr/>
                            </span>
                        )
                    })}

                </Col>
            </Row>
        </Layout>
    );
}

const Data = gql`
    query {
         categories{
            description
            jobs {
                Location
                company
                Job
                id
            }
        }
    }
`;

export default graphql(Data)(Home);

