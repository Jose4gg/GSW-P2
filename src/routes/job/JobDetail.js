import { Col, Row } from 'react-bootstrap';

import Layout from '../../components/Layout';
import React from 'react';
import Work from './Jobs';
import { observer } from 'mobx-react'

const JobDetail = observer(props =>
    <Layout>
        <span>
            <Col md={10} xs={9}>
                <h2>SitCorp S.R.L</h2>
                <h5>Santo Domingo, Republica Dominicana</h5>
                <hr/>
                <h5>Web Developer - Full Time</h5>
            </Col>
            <Col md={2} xs={3}>

            </Col>
        </span>
    </Layout>
);

export default JobDetail;