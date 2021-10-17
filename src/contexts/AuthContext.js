import React, { useContext, useState, useEffect } from "react";
import auth from "../auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onUserChanged(() => {
      setCurrentUser(auth.getCurrentUser());
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function signup(email, pass) {
    auth.signup(email, pass);
  }

  function login(email, pass) {
    auth.login(email, pass);
  }

  function logout() {
    auth.logout();
  }

  function isAuthenticated() {
    return auth.isAuthenticated();
  }

  function popUpGoogleAuth() {
    auth.popUpGoogleAuth()
  }

  function popUpFacebookAuth() {
    auth.popUpFacebookAuth()
  }

  // function getGoogleProvider

  const value = {
    currentUser,
    login,
    signup,
    logout,
    isAuthenticated,
    popUpGoogleAuth,
    popUpFacebookAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
