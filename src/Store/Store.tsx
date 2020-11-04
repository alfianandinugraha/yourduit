import React, { ReactNode } from 'react'
import ActivityStore from './ActivityStore'
import { AuthStore } from './AuthStore'
import { ThemeStore } from './ThemeStore'
import UserInfoContext from './UserInfoContext'

interface Props {
  children: ReactNode
}

export const Store = (props: Props) => {
  return (
    <>
      <AuthStore>
        <UserInfoContext>
          <ActivityStore>
            <ThemeStore>
              {props.children}
            </ThemeStore>
          </ActivityStore>
        </UserInfoContext>
      </AuthStore>
    </>
  )
}
