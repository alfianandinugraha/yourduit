import React, { ReactNode, useContext, useEffect } from 'react'
import { Redirect } from 'react-router'
import { authContext } from '../Store/AuthStore'

interface Props {
  children: ReactNode
}

export const ProtectedAuthRoute = ({children}: Props) => {
  const { isLoggedIn } = useContext(authContext)

  return (
    <div>
      <>
        {
          isLoggedIn ? <Redirect to="/dashboard" /> : (children)
        }
      </>
    </div>
  )
}
