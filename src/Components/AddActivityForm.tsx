import React, { useContext } from 'react'
import { Activity, activityContext } from '../Store/ActivityStore'
import { ActivityForm } from './ActivityForm'
import { saveActivityToLocalStorage } from '../Functions/LocalStorage'
import { themeContext } from '../Store/ThemeStore'

export const AddActivityForm = () => {
  const { addActivity } = useContext(activityContext)
  const { isAddActivityFormShow } = useContext(themeContext)

  return (
    <>
      {
        !isAddActivityFormShow ? null : (
          <ActivityForm getPayload={(payload) => {
            const { description, nominal, timestamp, type } = payload
            const activity: Activity = {
              description, nominal, type,
              id: new Date().getTime(),
              createdAt: timestamp,
              updatedAt: timestamp,
            }

            addActivity(activity)
            saveActivityToLocalStorage(activity)
          }} />
        )
      }
    </>
  )
}
