import { Col, Row } from 'react-bootstrap';
import history from '../../core/history';

import Layout from '../../components/Layout';
import React from 'react';
import Work from './Jobs';
import { observer } from 'mobx-react'
import { Paper, RaisedButton } from 'material-ui'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const Style = {
    padding: 15,
    marginTop: 5
}


function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

const JobDetail = observer(props =>
    <Layout>
        <Paper style={Style}>
            <Row>
                <Col md={10} xs={9}>
                    <h2>{Work.job.company}</h2>
                    <h5>{Work.job.Location}</h5>
                    <hr />
                    <h5>{Work.job.Job} - {Work.job.type}</h5>
                </Col>
                <Col md={2} xs={3}>
                    <img src={Work.job.Logo} alt="" className="img-responsive" width="304" height="236" />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md={12}>
                    <p>
                        {Work.job.Description}
                    </p>
                    <br />
                    <br />
                    <br />

                    <h4>How to Apply?</h4>
                    Send your Resume to {Work.job.Email} OR at {Work.job.URL}
                </Col>
            </Row>
            <br />
            <RaisedButton primary={true} label="Publicar" onClick={() => props.submit(Work.job).then(({data})=>{
                console.log(data);
                history.push("/Job/View/" + data.jobCreate.id);
                Work.setJob = {};
            })} />
        </Paper>
    </Layout>
);

const SubmitJob = gql`
    mutation ($company: String!, $type: String!, $Logo: String!, $URL: String!, $Job: String!, $Description: String!, $Email: String!, $Public: Boolean!, $Location: String!, $CategoryId: Int!) {
        jobCreate(company: $company,  type: $type, Logo: $Logo, URL: $URL, Job: $Job, Description: $Description, Email: $Email, Public: $Public, Location: $Location, CategoryId: $CategoryId) {
            id
        }
    }
`;

const JobDetailWithData = graphql(SubmitJob, {
    props: ({mutate}) => ({
        submit: (data) => mutate({variables: data})
    }),
})(JobDetail)

export default JobDetailWithData;