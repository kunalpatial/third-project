import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Signin.scss"
import * as Yup from "yup";
import { NavLink } from 'react-router-dom';

export const Signin = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("The Email Address* field is required."),
    password: Yup.string().required("The Password* field is required."),
  });
  const handleLogin = (values) => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUser.email === values.email &&
      storedUser.password === values.password
    ) {
      alert(" Login Successful!");
    } else {
      alert(" Invalid Email or Password");
    }
  };
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div id='login' class="col-lg-4">
            <div className="head">
              <h1>LOGIN </h1>
              <Formik
                initialValues={{ email: "", password: "", remember: false }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                <Form>
                  <label>Email Address* </label>
                  <Field type="text" name="email" />
                  <ErrorMessage name="email" component="p" className='error' />

                  <label>Password*</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="p" className="error" />

                  <button type="submit" className="signin-btn">
                    SIGN IN
                  </button>

                  <a href="/" className="forgot">
                    Forgot Password?
                  </a>
                </Form>

              </Formik>
            </div>
          </div>
          <div id='cutomer' class="col-lg-4 ">
            {/* New Customer */}
            <div className="new-customer">
              <h2>New Customer?</h2>
              <p>Creating an account is quick and easy</p>
              <NavLink to="Account" className="NavLink">
                <button className="create-btn">CREATE ACCOUNT</button>
              </NavLink>
              <p className="terms">
                By continuing, you agree to our <a href="/">Terms & Conditions</a>
              </p>
              <p>
                Want to check the status of your order?{" "}
                <a href="/">Order Status</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
