
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Account.scss";

const Account = () => {
  const initialValues = {
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails must match")
      .required("Confirm Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    const newUser = {
      email: values.email,
      password: values.password,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isUserExist = existingUsers.some(
      (user) => user.email === newUser.email
    );

    if (isUserExist) {
      alert("Email already registered!");
    } else {
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert("Account Created Successfully!");
      resetForm();
    }
  };

  return (
    <div className="register-container">
      <div className="register-form ">
        <h2 className="register-title">REGISTER</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-row">
              <div className="form-group ">
                <label>Email Address</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label>Confirm Email Address</label>
                <Field type="email" name="confirmEmail" />
                <ErrorMessage
                  name="confirmEmail"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              CREATE ACCOUNT
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Account;
