import React, { ReactNode, useReducer } from 'react'

interface Props {
  children: ReactNode
}

interface AuthContext {
  isLoggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
}

export const authContext = React.createContext<AuthContext>({
  isLoggedIn: false,
  setLoggedIn: (status: boolean) => {}
})

export const AuthStore = (props: Props) => {
  const [isLoggedIn, setLoggedIn] = useReducer(
    (state: boolean, newState: boolean) => newState, false
  )

  return (
    <authContext.Provider value={{isLoggedIn, setLoggedIn}}>
      {props.children}
    </authContext.Provider>
  )
}
