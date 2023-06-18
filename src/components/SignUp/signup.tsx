import React from "react";
import "./signup.scss";
import Logo from "../../assets/Icons/logo.png";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
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
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={(Value) => console.log(Value)}
              validationSchema={validationSchema}
            >
              {() => (
                <Form>
                  <div className="login-inputs">
                    <div className="login-container">
                      <div>
                        <Field
                          className="name-container"
                          type="text"
                          placeholder=" NAME"
                          name="name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="errorMessage"
                        />
                      </div>
                      <div>
                        <Field
                          className="email-container"
                          type="email"
                          name="email"
                          placeholder=" EMAIL"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="errorMessage"
                        />
                      </div>
                    </div>
                    <div>
                      <Field
                        type="password"
                        placeholder="CHOOSE A PASSWORD"
                        name="password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="errorMessage"
                      />
                    </div>

                    <button type="submit">CREATE ACCOUNT</button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="signup-text">
              <p>Already have an acoount ? </p>
              <Link to="/login">
                <p style={{ color: "#a796c6" }}> Log In</p>
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

export default SignUp;
