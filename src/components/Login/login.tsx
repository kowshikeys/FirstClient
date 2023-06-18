import React from "react";
import "./login.scss";
import Logo from "../../assets/Icons/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .test("at-symbol", 'Email must contain "@"', (value) =>
        value?.includes("@")
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="login-wrapper">
      <div className="mx">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="login">
          <div className="login-fields">
            <h1 className="login-title">Log In NeoWallet</h1>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(value) => console.log(value)}
            >
              {() => (
                <Form>
                  <div className="login-inputs">
                    <div>
                      <Field type="email" name="email" placeholder=" EMAIL" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="errorMessage"
                      />
                    </div>
                    <div>
                      <Field
                        type="password"
                        name="password"
                        placeholder=" PASSWORD"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="errorMessage"
                      />
                    </div>

                    <button type="submit">LOGIN</button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="signup-text">
              <p>Forgot password ? </p>
              <p>- Don't have an account ? </p>
              <Link to="/signup">
                <p style={{ color: "#a796c6" }}>Sign Up</p>
              </Link>
            </div>
          </div>
          <div className="login-qouts">
            <h2>TRACK EVERYTHING</h2>
            <p>IN ONE PLACE</p>
          </div>
        </div>
        <div className="social-media">
          <p>website</p>
          <p>twitter</p>
          <p>telegram</p>
          <p>medium</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
