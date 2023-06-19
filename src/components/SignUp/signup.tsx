import React, { useEffect } from "react";
import "./signup.scss";
import Logo from "../../assets/Icons/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { FirebaseError } from "firebase/app";
import { userStore } from "../../store/userStore";

const initialState = { name: "", email: "", password: "" };

const SignUp: React.FC = () => {
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
    name: Yup.string().required("Name is required"),
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
      const { user } = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await updateProfile(user, { displayName: values.name });
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
          alert("email is already exits");
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
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ isSubmitting }) => (
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
                        <ErrorMessage name="name" component="div" className="errorMessage" />
                      </div>
                      <div>
                        <Field
                          className="email-container"
                          type="email"
                          name="email"
                          placeholder=" EMAIL"
                        />
                        <ErrorMessage name="email" component="div" className="errorMessage" />
                      </div>
                    </div>
                    <div>
                      <Field type="password" placeholder="CHOOSE A PASSWORD" name="password" />
                      <ErrorMessage name="password" component="div" className="errorMessage" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                      CREATE ACCOUNT
                    </button>
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
