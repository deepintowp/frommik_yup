import React from 'react';
import { Formik, Form, Field } from "formik"

import validationSchema from "./validationschema"
import CustomFromValidationError from './Components/CustomFromValidationError';
const App = () => {
    return ( <>
    
        <Formik
        initialValues={{
            name:"",
            phone:"",
            gender:"",
            income:"",
            about:"",
            date:"",
            social:[]
        }}
        onSubmit={(values)=>{
            console.log(values);
        }}
        validationSchema={validationSchema}
        >
            {(values)=>(
                <Form>
                    <div style={{margin:"10px 0"}}>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" type="text"  />
                        <CustomFromValidationError name="name" />
                    </div>
                    <div style={{margin:"10px 0"}}>
                        <label htmlFor="phone">Phone</label>
                        <Field id="phone" name="phone" type="number"  />
                        <CustomFromValidationError name="phone" />
                    </div>
                    <div style={{margin:"10px 0"}}>
                        <label htmlFor="gender">Gender</label>
                        <div>
                            <label htmlFor="male">Male</label>  
                            <Field  id="male" name="gender" value="male" type="radio"  />
                            <label htmlFor="female">Female</label>  
                            <Field id="female" name="gender" value="female" type="radio"  />
                            <CustomFromValidationError name="gender" />
                        </div>
                    </div>
                    <div style={{margin:"10px 0"}}>
                        <label htmlFor="income">Income</label>
                        <Field id="income" name="income" as="select" > 
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>
                            <option value="3000">3000</option>
                            <option value="4000">4000</option>
                        </Field>
                        <CustomFromValidationError name="income" />
                    </div>
                    <div style={{margin:"10px 0"}}>
                        <label htmlFor="about">About</label>
                        <Field id="about" name="about" as="textarea"  />
                        <CustomFromValidationError name="about" />
                    </div>
                    <div style={{margin:"10px 0"}}>
                        <label htmlFor="date">Date</label>
                        <Field id="date" name="date" type="date"  />
                        <CustomFromValidationError name="date" />
                    </div>
                    <div style={{margin:"10px 0"}}>
                        <label htmlFor="social">social</label>
                        
                        <div>
                            <label htmlFor="Facebook">Facebook</label>
                            <Field  name="social[0]" type="text"  />
                            <CustomFromValidationError name="social.0" />
                        
                            <label htmlFor="Twitter">Twitter</label>
                            <Field  name="social[1]" type="text"  />
                            <CustomFromValidationError name="social.1" />
                        
                            <label htmlFor="Instagram">Instagram</label>
                            <Field  name="social[2]" type="text"  />
                            <CustomFromValidationError name="social.2" />
                        </div>
                      

                        
                    </div>
                    <button type="submit">
                            Submit
                        </button>
                    
                    
                </Form>
            )}
        </Formik>
    </> );
}
 
export default App;