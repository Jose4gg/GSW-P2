import { Col, Row } from 'react-bootstrap'
import { Paper, RaisedButton, TextField } from 'material-ui';
import React, { PropTypes } from 'react';

import App from '../../Stores/App'
import Layout from '../../components/Layout';
import Link from '../../components/Link'
import Profile from './img'
import Table from './JobsTable';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import history from '../../core/history'
import { observer } from 'mobx-react'
import s from './Home.css';
import { trans } from '../../Stores/Dictionary'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */













const container = {
    padding: 15,
}
const Home = observer(props => {
    if (!props.data) return <span />
    if (props.data.loading) return <span />
    if (!props.data.JobByCategory) return <span />
    return (
        <Layout>
            <Row>
                <Col>
                    
                    <br />
                    <br />
                    <Paper zDepth={1} style={{ padding: 10 }}>
                        
                        <Table
                            jobs={props.data.JobByCategory}
                            />
                    </Paper>
                </Col>
            </Row>
        </Layout>
    );
});

const Data = gql`
    query ($id: Int!) {
         JobByCategory(id: $id){
            id
            company
            type
            Logo
            URL
            Location
            Job
            Description
            Email
        }
    }
`;

const A = graphql(Data, {
    options: ({ id }) => ({ variables: { id: id } }),
})(Home);

const Search = {
    path: '/Category/:id',
    action({params}) {
        return {
            title: "PreviewJob",
            component: <A id={params.id} />,
        };
    },
}

export { Search }
