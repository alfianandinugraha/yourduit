import React, { ReactNode, useEffect, useReducer } from 'react'
import { LOCAL_STORAGE_PREFIX, LOCAL_STORAGE_ACTIVITY_SEPARATOR } from '../utils/Prefix'

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
    const separator = LOCAL_STORAGE_ACTIVITY_SEPARATOR;
    const name = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${separator}user${separator}name`)
    const locale = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${separator}user${separator}locale`)

    if (name && locale) setLoggedIn(true)
    else setLoggedIn(false)
  })

  return (
    <authContext.Provider value={{isLoggedIn, setLoggedIn}}>
      {props.children}
    </authContext.Provider>
  )
}
