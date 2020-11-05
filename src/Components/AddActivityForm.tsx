import React, { useContext } from 'react'
import { Activity, activityContext } from '../Store/ActivityStore'
import { ActivityForm } from './ActivityForm'
import { saveActivityToLocalStorage } from '../Functions/LocalStorage'

export const AddActivityForm = () => {
  const { addActivity } = useContext(activityContext)

  return (
    <>
      <ActivityForm getPayload={(payload) => {
        const {description, nominal, timestamp, type} = payload
        const activity: Activity = {
          description, nominal, type,
          id: new Date().getTime(),
          createdAt: timestamp,
          updatedAt: timestamp,
        }
        
        addActivity(activity)
        saveActivityToLocalStorage(activity)
      }}/>
    </>
  )
}
