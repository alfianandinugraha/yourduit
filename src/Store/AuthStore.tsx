import React, { ReactNode, useEffect, useReducer } from 'react'

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

  useEffect(() => {
    const name = localStorage.getItem('yourduit.netlify.app-name')
    const currency = localStorage.getItem('yourduit.netlify.app-currency')

    if (name && currency) setLoggedIn(true)
    else setLoggedIn(false)
  })

  return (
    <authContext.Provider value={{isLoggedIn, setLoggedIn}}>
      {props.children}
    </authContext.Provider>
  )
}
