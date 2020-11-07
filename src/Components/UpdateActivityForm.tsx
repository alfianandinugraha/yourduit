import React, { useContext } from 'react'
import { themeContext } from '../Store/ThemeStore'
import { ActivityForm } from './ActivityForm'

interface Props {
  idToUpdate: number;
}

export const UpdateActivityForm = (props: Props) => {
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
