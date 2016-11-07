import { Col, Row } from 'react-bootstrap'
import { Paper, RaisedButton, TextField } from 'material-ui';
import React, { PropTypes } from 'react';

import App from '../../Stores/App'
import { Avatar } from 'material-ui';
import Layout from '../../components/Layout';
import Link from '../../components/Link'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import history from '../../core/history'
import { observer } from 'mobx-react'
import { trans } from '../../Stores/Dictionary'

const container = {
    padding: 14,
}
const Home = observer(props => {
    if (!props.data) return <span />
    if (props.data.loading) return <span />
    if (!props.data.me) return <span />
    return (
        <Layout>
            <Col md={12} className="text-center">
                <br />
                <br />
                <br />
                <Avatar
                    src={props.data.me.Profile.picture}
                    size={150}
                    />
                <h4>{props.data.me.email}</h4>

                <h6>Roles:</h6>
                {props.data.me.roles.map((row, index) => (
                    <span>
                        <h6>{row.description}</h6>
                    </span>
                ))}
                <hr />
                


            </Col>
        </Layout>
    );
});
const Data = gql`
    query {
         me{
             id
            email
            Profile{
                picture
            }
            roles{
                userId
                description
            }
        }
    }
`;

export default graphql(Data)(Home);

