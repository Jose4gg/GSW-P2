import { Col, Row } from 'react-bootstrap';
import history from '../../core/history';

import Layout from '../../components/Layout';
import React from 'react';
import { observer } from 'mobx-react'
import { Paper, RaisedButton } from 'material-ui'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const Style = {
    padding: 15,
    marginTop: 5
}




const JobDetail = observer(props => {
    if (props.data.job.loading) {return <span />;}
    else{
        console.log(props);
    }
    return (
        <Layout>
            <Paper style={Style}>
                <Row>
                    <Col md={10} xs={9}>
                        <h2>{props.data.job.company}</h2>
                        <h5>{props.data.job.Location}</h5>
                        <hr />
                        <h5>{props.data.job.Job}- {props.data.job.type}</h5>
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
                        Send your Resume to {props.data.job.Email}OR at {props.data.job.URL}
                    </Col>
                </Row>
                <br />
            </Paper>
        </Layout>
    )
}
);

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
function searchToObject() {
    if (global.location) {
        var pairs = global.location.search.substring(1).split("&"),
            obj = {},
            pair,
            i;

        for (i in pairs) {
            if (pairs[i] === "") continue;

            pair = pairs[i].split("=");
            obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }

        return obj;
    }
}
let a; 
if(searchToObject() == undefined){
    a = 0
}
else {
    a = searchToObject().id
}

export default graphql(Data, {
    options: { variables: { id: parseInt(a) } }
})(JobDetail);