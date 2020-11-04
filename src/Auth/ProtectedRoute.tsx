import React, { ReactNode, useContext } from 'react'
import { Redirect } from 'react-router'
import { authContext } from '../Store/AuthStore'

interface Props {
  children: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {
  const { isLoggedIn } = useContext(authContext)

  return (
    <>
      {
        !isLoggedIn ? <Redirect to="/"/> : (children)
      }
    </>
  )
}
