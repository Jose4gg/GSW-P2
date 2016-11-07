import Formsy, { Form } from 'formsy-react'
import {
    FormsyRadio,
    FormsyRadioGroup,
    FormsySelect,
    FormsyText,
} from 'formsy-material-ui/lib';
import { MenuItem, RaisedButton } from 'material-ui'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../../components/Layout';
import React from 'react';
import Work from './Jobs';
import history from '../../core/history';
import { observer } from 'mobx-react'

const CreateJob = observer(props => {
    if (!props.data) return <span />
    if (props.data.loading) return <span />
    return (
        <Layout>
            <Formsy.Form onValidSubmit={(a) => { Work.setJob(a); history.push('/Job/PreviewJob') } } onValid={() => Work.setValid()} onInvalid={() => Work.setInvalid}>
                <FormsyText
                    name="company"
                    fullWidth={true}
                    floatingLabelText="Company"
                    defaultValue={Work.job.company}

                    />
                <FormsyText
                    name="Description"
                    fullWidth={true}
                    rows={4}
                    rowsMax={4}
                    required
                    defaultValue={Work.job.Description}
                    floatingLabelText="Description"
                    />
                <FormsySelect
                    name="type"
                    fullWidth={true}
                    required
                    defaultValue={Work.job.type}
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
                    defaultValue={Work.job.categoryId}
                    floatingLabelText="Categoria"
                    >
                    {props.data.categories.map(function (object, i) {
                        return <MenuItem value={object.id} key={i} primaryText={object.description} />;
                    })}
                </FormsySelect>
                <FormsyText
                    name="Logo"
                    fullWidth={true}
                    defaultValue={Work.job.Logo}
                    required
                    floatingLabelText="Logo de la empresa"
                    />
                <FormsyText
                    name="Job"
                    fullWidth={true}
                    required
                    floatingLabelText="Posicion"
                    defaultValue={Work.job.Job}
                    />
                <FormsyText
                    name="Location"
                    fullWidth={true}
                    required
                    floatingLabelText="Location"
                    defaultValue={Work.job.Location}
                    />
                <FormsyText
                    name="URL"
                    fullWidth={true}
                    defaultValue={Work.job.URL}
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
                    defaultValue={Work.job.Email}
                    validations="isEmail"
                    required
                    validationError={"Debes ser una direccion de correo valida"}
                    updateImmediately={true}
                    floatingLabelText="Email"
                    />
                <FormsyRadioGroup name="Public" defaultSelected={Work.job.Public} required>
                    <FormsyRadio
                        value={true}
                        label="Publico"
                        />
                    <FormsyRadio
                        value={false}
                        label="No Publico"
                        />
                </FormsyRadioGroup>
                <RaisedButton
                    label="Postear Empleo"
                    primary={true}
                    type="submit"
                    disabled={!Work.valid}
                    />
            </Formsy.Form>
        </Layout>)
});

export { CreateJob };


const data = gql`
   query {
        categories{
            id
            description
        }
    }
`;

export default graphql(data)(CreateJob);