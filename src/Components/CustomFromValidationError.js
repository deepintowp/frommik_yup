import { ErrorMessage } from 'formik';
import React from 'react';
const CustomFromValidationError = (props) => {
    return ( 
            <div  style={{color:"red"}} >
                    <ErrorMessage name={props.name} />
            </div> 
    );
}
 
export default CustomFromValidationError;
