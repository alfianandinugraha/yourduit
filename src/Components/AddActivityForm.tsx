import React, { useContext } from 'react'
import { activityContext } from '../Store/ActivityStore'
import { ActivityForm } from './ActivityForm'
import { saveActivityToLocalStorage } from '../Functions/LocalStorage'

export const AddActivityForm = () => {
  const { addActivity } = useContext(activityContext)

  return (
    <>
      <ActivityForm getPayload={(payload) => {
        addActivity(payload)
        saveActivityToLocalStorage(payload)
      }}/>
    </>
  )
}
