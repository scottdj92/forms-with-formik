import React from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import { string, object, array } from "yup";
import TextField from "./TextField";

export interface FormValues {
    people: Array<{
        firstName: string;
        pet: string;
    }>;
}

const initialValues: FormValues = {
    people: [
        {
            firstName: "",
            pet: "",
        },
        {
            firstName: "",
            pet: "",
        },
        {
            firstName: "",
            pet: "",
        },
    ],
};

const App: React.SFC = () => (
    <>
        <h1>Working with Formik</h1>
        <Formik initialValues={initialValues}
            onSubmit={(values: FormValues) => console.log(values)}
            validationSchema={object().shape({
                people: array().of(object().shape({
                    firstName: string().required("Entering a first name is required"),
                })),
            })}
            render={({ handleSubmit, errors, touched, values }) => (
                <Form>
                    <FieldArray name="people"
                    render={(helpers) => (
                        <div>
                            {values.people && values.people.length > 0 ? (
                                values.people.map( (person, index) => (
                                    <React.Fragment key={index}>
                                        <Field name={`people.${index}.firstName`} render={(innerProps) => (
                                            <TextField {...innerProps} title="First Name" index={index}/>
                                        )}/>
                                        <label htmlFor="pet">
                                            <div>Pet</div>
                                            <Field name={`people.${index}.pet`} component="select">
                                                <option value="Dog">Dog</option>
                                                <option value="Cat">Cat</option>
                                                <option value="Other">Other</option>
                                            </Field>
                                        </label>
                                    </React.Fragment>
                                ))
                            ) : null}
                        <button type="submit">Submit</button>
                        </div>
                    )}/>
                </Form>
            )}>
        </Formik>
    </>
);

export default App;
