
import { createContext, useState, useEffect } from "react";
import netlifyIdentity from 'netlify-identity-widget'

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    netlifyIdentity.init()
}, []);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContext;