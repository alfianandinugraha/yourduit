import React, { ReactNode } from 'react'
import ActivityStore from './ActivityStore'
import UserInfoContext from './UserInfoContext'

interface Props {
  children: ReactNode
}

export const Store = (props: Props) => {
  return (
    <>
      <UserInfoContext>
        <ActivityStore>
          {props.children}
        </ActivityStore>
      </UserInfoContext>
    </>
  )
}
