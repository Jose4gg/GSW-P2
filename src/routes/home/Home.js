/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import App from '../../Stores/App'
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
import Link from '../../components/Link'
import { observer } from 'mobx-react'
const container = {
    padding: 15,
}
import history from '../../core/history'
import {trans} from '../../Stores/Dictionary'
const Home = observer(props => {
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
                                onChange={(a) => App.setText(a.target.value)}
                                floatingLabelText={trans.key.LAYOUT.ENTER_QUERY()}
                                />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                                  <Link to={`/Search/${App.text}`}>
                                <RaisedButton
                                    primary={true}
                                    label={trans.key.LAYOUT.SEARCH()}
                                    />
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/Job/Create">
                                <RaisedButton
                                    label={trans.key.LAYOUT.POST_A_JOB()}
                                    secondary={true}
                                    />
                            </Link>
                        </Col>
                    </Paper>
                    <br />
                    {props.data.categories.map(function(object, i) {
                        return (
                            <span key={i}>
                                <Paper zDepth={1} style={{ padding: 10 }} key={i}>
                                    <h6>{object.description}</h6>
                                    <hr />
                                    <Table
                                        jobs={object.jobs}
                                        />
                                </Paper>
                                <hr />
                            </span>
                        )
                    })}

                </Col>
            </Row>
        </Layout>
    );
});

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

