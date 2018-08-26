import React from "react";
import { Formik, Field, FormikErrors } from "formik";

interface FormValues {
    firstName: string;
    pet: string;
}

const initialValues: FormValues = {
    firstName: "",
    pet: "",
};

const App: React.SFC = () => (
    <>
        <h1>Working with Formik</h1>
        <Formik initialValues={initialValues}
            onSubmit={(values: FormValues) => console.log(values)}
            validate={(values: FormValues) => {
                const errors: FormikErrors<FormValues> = {};
                if (!values.firstName) {
                    errors.firstName = "Required";
                }
                return errors;
            }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">
                        <div>First Name</div>
                        <Field type="text" name="firstName"/>
                    </label>
                    <label htmlFor="pet">
                        <div>Pet</div>
                        <Field name="pet" component="select">
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Other">Other</option>
                        </Field>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}>
        </Formik>
    </>
);

export default App;
