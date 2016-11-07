import Formsy, { Form } from 'formsy-react'
import {
    FormsyRadio,
    FormsyRadioGroup,
    FormsySelect,
    FormsyText,
} from 'formsy-material-ui/lib';
import { MenuItem, RaisedButton } from 'material-ui'

import Layout from '../../components/Layout';
import React from 'react';
import Work from './Jobs';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import history from '../../core/history';
import { observer } from 'mobx-react'

const CreateJob = observer(props => {
    if (!props.data) return <span />
    if (props.data.loading) return <span />
    if (!props.data.job) return <span />
    return (
        <Layout>
            <Formsy.Form onValidSubmit={(a) => {
                a.Secret = props.Secret
                a.id = parseInt(props.id)
                props.submit(a).then(({data}) => {
                history.push("/Job/View/" + data.jobCreate.id + "/" + data.jobCreate.Secret);
            })}} onValid={() => Work.setValid()} onInvalid={() => Work.setInvalid}>
                <FormsyText
                    name="company"
                    fullWidth={true}
                    floatingLabelText="Company"
                    defaultValue={props.data.job.company}

                    />
                
                <FormsyText
                    name="Description"
                    fullWidth={true}
                    rows={4}
                    rowsMax={4}
                    required
                    defaultValue={props.data.job.Description}
                    floatingLabelText="Description"
                    />
                <FormsySelect
                    name="type"
                    fullWidth={true}
                    required
                    floatingLabelText="Tipo de Puesto"
                    >
                    <MenuItem value={'FULL-TIME'} primaryText="FULL-TIME" />
                    <MenuItem value={'PART-TIME'} primaryText="PART-TIME" />
                    <MenuItem value={'FREELANCE'} primaryText="FREELANCE" />
                </FormsySelect>
                <FormsySelect
                    name="CategoryId"
                    fullWidth={true}
                    required
                    floatingLabelText="Categoria"
                    >
                    {props.data.categories.map(function (object, i) {
                        return <MenuItem value={object.id} key={i} primaryText={object.description} />;
                    })}
                </FormsySelect>
                <FormsyText
                    name="Logo"
                    fullWidth={true}
                    defaultValue={props.data.job.Logo}
                    required
                    floatingLabelText="Logo de la empresa"
                    />
                <FormsyText
                    name="Job"
                    fullWidth={true}
                    required
                    floatingLabelText="Posicion"
                    defaultValue={props.data.job.Job}
                    />
                <FormsyText
                    name="Location"
                    fullWidth={true}
                    required
                    floatingLabelText="Location"
                    defaultValue={props.data.job.Location}
                    />
                <FormsyText
                    name="URL"
                    fullWidth={true}
                    defaultValue={props.data.job.URL}
                    validations="isUrl"
                    required
                    validationError={"Debe ser una URL valida"}
                    updateImmediately={true}
                    floatingLabelText="URL de la empresa"
                    />
                <FormsyText
                    name="Email"
                    fullWidth={true}
                    floatingLabelText="Email"
                    defaultValue={props.data.job.Email}
                    validations="isEmail"
                    required
                    validationError={"Debes ser una direccion de correo valida"}
                    updateImmediately={true}
                    floatingLabelText="Email"
                    />
                <FormsyRadioGroup name="Public" defaultSelected={props.data.job.Public} required>
                    <FormsyRadio
                        value={true}
                        label="Publico"
                        />
                    <FormsyRadio
                        value={false}
                        label="No Publico"
                        />
                </FormsyRadioGroup>
                <RaisedButton primary={true} label="Publicar" type="submit" />
            </Formsy.Form>
        </Layout>)
});

export { CreateJob };


const data = gql`
   query ($id: Int!) {
       categories{
            id
            description
        }
        job(id: $id){
    	    id
            company
            type
            Logo
            URL
            Job
            Description
            Email
            Location
        }
    }
`;

const withMutation = gql`
     mutation ($company: String!, $type: String!, $Logo: String!, $URL: String!, $Job: String!, $Description: String!, $Email: String!, $Public: Boolean!, $Location: String!, $CategoryId: Int!, $Secret: String!) {
        JobEdit(company: $company,  type: $type, Logo: $Logo, URL: $URL, Job: $Job, Description: $Description, Email: $Email, Public: $Public, Location: $Location, CategoryId: $CategoryId, Secret: $Secret) {
            id
            Secret
        }
    }
`
const a = graphql(data, {
    options: (props) => ({ variables: { id: props.id, Secret: props.Secret } }),
})(CreateJob);

export default graphql(withMutation, {
    props: ({mutate}) => ({
        submit: (data) => mutate({ variables: data })
    }),
})(a);