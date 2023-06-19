import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { userStore } from "../store/userStore";
import { auth } from "../utils/firebase";

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const updateUser = userStore((state) => state.updateUser);
  const updateFetching = userStore((state) => state.updateFetching);

  useEffect(() => {
    return onAuthStateChanged(auth, (data) => {
      if (data) {
        updateUser(data);
        setTimeout(() => {
          updateFetching(false);
        }, 0);
      } else {
        setTimeout(() => {
          updateFetching(false);
          navigate("/login");
        }, 0);
      }
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Auth;
