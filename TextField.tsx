import React from "react";
import { FieldProps } from "formik";
import { FormValues } from "./app";
import styled from "styled-components";

const Title = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    color: cornflowerblue;
    margin-bottom: 5px;
`;

const FormInput = styled.input`
    border-color: gray;
    border: 1px solid;
    padding: 5px 5px;
    margin-bottom: 5px;
`;

const InputError = styled.div`
    color: red;
    font-family: Arial, Helvetica, sans-serif;
    margin: 15px 0;
`;

interface Props {
    title: string;
}

type OwnProps = FieldProps<FormValues> & Props;
const TextField: React.SFC<OwnProps> = ({ title, field, form }) => (
    <label htmlFor={field.name}>
        <Title>{title}</Title>
        <FormInput type="text" {...field}/>
        {
            form.touched[field.name] && form.errors[field.name]
            ? <InputError>{form.errors[field.name]}</InputError>
            : null
        }
    </label>
);

export default TextField;
