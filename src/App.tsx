import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login/login";
import SignUp from "./components/SignUp/signup";
import { userStore } from "./store/userStore";
import SplashScreen from "./components/SplashScreen";
import Auth from "./components/Auth";

function App() {
  const isFetching = userStore((state) => state.isFetching);

  return (
    <>
      {isFetching && <SplashScreen />}
      <Routes>
        <Route
          element={
            <div>
              <Auth />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
