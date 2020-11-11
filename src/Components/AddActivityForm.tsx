import React, { useContext, useEffect, useState } from 'react'
import { Activity, activityContext } from '../Store/ActivityStore'
import { ActivityForm } from './ActivityForm'
import { saveActivityToLocalStorage } from '../Functions/LocalStorage'
import { themeContext } from '../Store/ThemeStore'
import { ActivityFormAnimation } from './ActivityFormAnimation'
import { Alert } from './Alert'
import { setTimeout } from 'timers'

export const AddActivityForm = () => {
  const { addActivity } = useContext(activityContext)
  const { isAddActivityFormShow } = useContext(themeContext)
  const [isAlertShow, setIsAlertShow] = useState(false)

  useEffect(() => {
    if (!isAlertShow) return
    setTimeout(() => setIsAlertShow(false), 2000)
  }, [isAlertShow, setIsAlertShow])

  return (
    <>
      <Alert message="Activity has been added" isShow={isAlertShow} variant="primary"/>
      <ActivityFormAnimation state={isAddActivityFormShow}>
        <ActivityForm getPayload={(payload) => {
          const { description, nominal, timestamp, type } = payload
          const activity: Activity = {
            description, nominal, type,
            id: new Date().getTime(),
            createdAt: timestamp,
            updatedAt: timestamp,
          }
          setIsAlertShow(true)

          addActivity(activity)
          saveActivityToLocalStorage(activity)
        }} />
      </ActivityFormAnimation>
    </>
  )
}
