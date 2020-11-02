import React, { ReactNode } from 'react'
import UserInfoContext from './UserInfoContext'

interface Props {
  children: ReactNode
}

export const Store = (props: Props) => {
  return (
    <>
      <UserInfoContext>
        {props.children}
      </UserInfoContext>
    </>
  )
}
