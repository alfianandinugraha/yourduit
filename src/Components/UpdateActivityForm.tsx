import React, { useContext } from 'react'
import { themeContext } from '../Store/ThemeStore'
import { ActivityForm } from './ActivityForm'

export const UpdateActivityForm = () => {
  const { isUpdateActivityFormShow } = useContext(themeContext)

  return (
    <>
      {
        !isUpdateActivityFormShow ? null : (
          <ActivityForm getPayload={(payload) => {
            console.log(payload)
          }}/>
        )
      }
    </>
  )
}
