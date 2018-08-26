import React from "react";
import { Formik, Field, FormikErrors } from "formik";
import { string, object } from "yup";

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
            validationSchema={object().shape({
                firstName: string().required("Entering your first name is required."),
            })}
            render={({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">
                        <div>First Name</div>
                        <Field type="text" name="firstName"/>
                        {
                            touched.firstName && errors.firstName
                            ? <div>{errors.firstName}</div>
                            : null
                        }
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
