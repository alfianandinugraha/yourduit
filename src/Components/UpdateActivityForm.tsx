import React, { useContext, useEffect, useState } from 'react'
import { Activity, activityContext } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'
import { ActivityForm } from './ActivityForm'
import { ActivityFormAnimation } from './ActivityFormAnimation'
import { Alert } from './Alert'

interface Props {
  idToUpdate: number;
  activity: Activity;
}

export const UpdateActivityForm = (props: Props) => {
  const { isUpdateActivityFormShow } = useContext(themeContext)
  const { updateActivity } = useContext(activityContext)
  const [isAlertShow, setIsAlertShow] = useState(false)

  useEffect(() => {
    if (!isAlertShow) return
    setTimeout(() => setIsAlertShow(false), 2000)
  }, [isAlertShow, setIsAlertShow])

  return (
    <>
      <Alert message="Activity has been updated" isShow={isAlertShow} variant="primary"/>
      <ActivityFormAnimation state={isUpdateActivityFormShow}>
        <ActivityForm getPayload={(payload) => {
          const { id, createdAt } = props.activity
          const { description, nominal, timestamp, type } = payload
          const activity: Activity = {
            description, nominal, type, id, createdAt,
            updatedAt: timestamp,
          }

          updateActivity(id, activity)
          setIsAlertShow(true)
        }} activity={props.activity} />
      </ActivityFormAnimation>
    </>
  )
}
