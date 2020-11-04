import React from 'react'

interface AuthContext {
  isLoggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
}

export const authContext = React.createContext({
  isLoggedIn: false,
  setLoggedIn: () => {}
})

export const AuthStore = () => {
  return (
    <>
      
    </>
  )
}
