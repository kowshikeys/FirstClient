import React, { useEffect } from "react";
import "./login.scss";
import Logo from "../../assets/Icons/logo.png";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { AuthErrorCodes, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { FirebaseError } from "firebase/app";
import { userStore } from "../../store/userStore";

const initialState = { email: "", password: "" };

const Login: React.FC = () => {
  const navigate = useNavigate();
  const updateUser = userStore((state) => state.updateUser);
  const updateFetching = userStore((state) => state.updateFetching);

  useEffect(() => {
    return onAuthStateChanged(auth, (data) => {
      if (data) {
        updateUser(data);
        setTimeout(() => {
          updateFetching(false);
          navigate("/");
        }, 0);
      } else {
        setTimeout(() => {
          updateFetching(false);
        }, 0);
      }
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .test("at-symbol", 'Email must contain "@"', (value) => value?.includes("@"))
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (
    values: typeof initialState,
    actions: FormikHelpers<typeof initialState>
  ) => {
    try {
      console.log(values);
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.log(error);
      if (error instanceof FirebaseError) {
        if (error.code === AuthErrorCodes.USER_DELETED) {
          alert("user not found");
        }
        if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
          alert("wrong password");
        }
      }
    } finally {
      actions.setSubmitting(false);
    }
  };

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
              initialValues={initialState}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="login-inputs">
                    <div>
                      <Field type="email" name="email" placeholder=" EMAIL" />
                      <ErrorMessage name="email" component="div" className="errorMessage" />
                    </div>
                    <div>
                      <Field type="password" name="password" placeholder=" PASSWORD" />
                      <ErrorMessage name="password" component="div" className="errorMessage" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                      LOGIN
                    </button>
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
