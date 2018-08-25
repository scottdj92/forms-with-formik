import React from "react";
import { Formik, Field } from "formik";

const initialValues = {
    firstName: "",
    pet: "",
};

const App: React.SFC = () => (
    <>
        <h1>Working with Formik</h1>
        <Formik initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
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
