import React, { ReactNode, useContext } from 'react'
import { Redirect } from 'react-router'
import { authContext } from '../Store/AuthStore'

interface Props {
  children: ReactNode
}

export const ProtectedAuthRoute = ({children}: Props) => {
  const { isLoggedIn } = useContext(authContext)

  return (
    <div style={{position: 'relative', overflow: 'hidden'}}>
      <>
        {
          isLoggedIn ? <Redirect to="/dashboard" /> : (children)
        }
      </>
    </div>
  )
}
