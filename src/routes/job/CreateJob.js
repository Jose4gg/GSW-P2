import Formsy,{Form} from 'formsy-react'
import {
  FormsyRadio,
  FormsyRadioGroup,
  FormsySelect,
  FormsyText,
} from 'formsy-material-ui/lib';

import {Job} from './Jobs';
import Layout from '../../components/Layout';
import {MenuItem} from 'material-ui'
import React from 'react';
import {observer} from 'mobx-react'

const CreateJob = observer(props =>  
    <Layout>
        <Formsy.Form onValidSubmit={(a) => Job.insertJob(a)}>
            <FormsyText
                name="company"
                fullWidth={true}
                floatingLabelText="Company"
            />
            <FormsyText
                name="Description"
                fullWidth={true}
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
            <FormsyText
                name="Logo"
                fullWidth={true}
                floatingLabelText="Logo de la empresa"
            />
            <FormsyText
                name="Job"
                fullWidth={true}
                floatingLabelText="Posicion"
            />
            <FormsyText
                name="URL"
                fullWidth={true}
                validations="isUrl"
                validationError={"Debe ser una URL valida"}
                updateImmediately={true}
                floatingLabelText="URL de la empresa"
            />
            <FormsyText
                name="Email"
                fullWidth={true}
                floatingLabelText="Email"
                 validations="isEmail"
                validationError={"Debes ser una direcciond de correo valida"}
                updateImmediately={true}
                floatingLabelText="Email"
            />
            <FormsyRadioGroup name="Public" defaultSelected={true}>
                <FormsyRadio
                    value={true}
                    label="Publico"
                />
                <FormsyRadio
                    value={false}
                    label="No Publico"
                />
            </FormsyRadioGroup>
            
            <button type="submit"></button>
        </Formsy.Form>
    </Layout>
);

export default CreateJob;