import { Col, Row } from 'react-bootstrap';
import { Paper, RaisedButton } from 'material-ui'

import Layout from '../../components/Layout';
import Link from '../../components/Link'
import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import history from '../../core/history';
import {observer} from 'mobx-react'
import {trans} from '../../Stores/Dictionary'

const Style = {
    padding: 15,
    marginTop: 5
}




const JobDetail = observer(props => {
    let a = <span></span>
    if (props.secret) {
        a = <Link to={`/Job/Edit/${props.id}/${props.secret}`}>{trans.key.LAYOUT.EDIT}</Link>
    }
    if(!props.data) return <span/>
    if(!props) return <span/>
    if (props.data.loading) {return <span />;}
    return (
        <Layout>
            <Paper style={Style}>
                <Row>
                    <Col md={10} xs={9}>
                        <h2>{props.data.job.company}</h2>
                        <h5>{props.data.job.Location}</h5>
                        <hr />
                        <h5>{props.data.job.Job} - {props.data.job.type}</h5>
                    </Col>
                    <Col md={2} xs={3}>
                        <img src={props.data.job.Logo} alt="" className="img-responsive" width="304" height="236" />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12}>
                        <p>
                            {props.data.job.Description}
                        </p>
                        <br />
                        <br />
                        <br />
                        <h4>How to Apply?</h4>
                        Send your Resume to {props.data.job.Email} OR at {props.data.job.URL}
                        <br/>
                        {a}
                    </Col>
                </Row>
                <br />
            </Paper>
        </Layout>
    )
})


const Data = gql`
    query ($id: Int!) {
        job(id: $id) {
            id
            company
            type
            Logo
            Job
            URL
            Description
            Email
            Location
        }
    }
`;
// var search = history.location.search.substring(1);
// JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

export default graphql(Data, {
    options:  ({ id }) => ({ variables: { id: id } }),
})(JobDetail);