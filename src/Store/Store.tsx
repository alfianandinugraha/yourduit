import React, { ReactNode } from 'react'
import ActivityStore from './ActivityStore'
import { ThemeStore } from './ThemeStore'
import UserInfoContext from './UserInfoContext'

interface Props {
  children: ReactNode
}

export const Store = (props: Props) => {
  return (
    <>
      <UserInfoContext>
        <ActivityStore>
          <ThemeStore>
            {props.children}
          </ThemeStore>
        </ActivityStore>
      </UserInfoContext>
    </>
  )
}
