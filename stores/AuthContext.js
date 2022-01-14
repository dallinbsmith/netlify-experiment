
import { createContext, useState, useEffect } from "react";
import netlifyIdentity from 'netlify-identity-widget'

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

  useEffect(() => {
    netlifyIdentity.on('login', (user)=> {
      setUser(user)
      netlifyIdentity.close()
      console.log('login event')
    })

    netlifyIdentity.on('logout', (user)=> {
      setUser(null)
      console.log('login event')
    })

    netlifyIdentity.init()
    console.log('user', user)
    }, []);

    const login = () => {
        netlifyIdentity.open()
    }
    const logout = () => {
        netlifyIdentify.logout()
    }
    const context = { user, login, logout }

  return <AuthContext.Provider value = {context}>
      {children}
      </AuthContext.Provider>;
};

export default AuthContext;