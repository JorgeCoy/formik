import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      emailField:'',
      pswField:''
    },
    onsubmit: values =>{
      if (!formik.isValidating && formik.isSubmitting) {
        alert("Login Successful");
        }
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) errors.emailField = "Field Required";
      if(!values.pswField) errors.pswField = "Field Required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) errors.emailField = 'Username should be and email';
      return errors;
    }
  });
  return (
    <div>
        <form onSubmit = {formik.handleSubmit}>
        <div>Email</div>
        <input name="emailField" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input name="pswField" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}
        <button type='submitBtn'>submit</button>
      </form>
    </div>
  );
}

export default App;
