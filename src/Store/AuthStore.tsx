import React, { ReactNode, useReducer } from 'react'
import { LOCAL_STORAGE_PREFIX, LOCAL_STORAGE_ACTIVITY_SEPARATOR } from '../utils/Prefix'

interface Props {
  children: ReactNode
}

interface AuthContext {
  isLoggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
}

const isLoginFromLocalStorage = () => {
  const separator = LOCAL_STORAGE_ACTIVITY_SEPARATOR;
  const name = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${separator}user${separator}name`)
  const locale = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${separator}user${separator}locale`)

  return name && locale ? true : false
}

export const authContext = React.createContext<AuthContext>({
  isLoggedIn: isLoginFromLocalStorage(),
  setLoggedIn: (status: boolean) => {}
})

export const AuthStore = (props: Props) => {
  const [isLoggedIn, setLoggedIn] = useReducer(
    (state: boolean, newState: boolean) => newState, isLoginFromLocalStorage()
  )

  return (
    <authContext.Provider value={{isLoggedIn, setLoggedIn}}>
      {props.children}
    </authContext.Provider>
  )
}
