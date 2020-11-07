import React, { useContext } from 'react'
import { Activity, activityContext } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'
import { ActivityForm } from './ActivityForm'

interface Props {
  idToUpdate: number;
  activity: Activity;
}

export const UpdateActivityForm = (props: Props) => {
  const { isUpdateActivityFormShow } = useContext(themeContext)
  const { updateActivity } = useContext(activityContext)

  return (
    <>
      {
        !isUpdateActivityFormShow ? null : (
          <ActivityForm getPayload={(payload) => {
            const { id, createdAt } = props.activity
            const { description, nominal, timestamp, type } = payload
            const activity: Activity = {
              description, nominal, type,id,createdAt,
              updatedAt: timestamp,
            }

            updateActivity(id, activity)
          }} activity={props.activity}/>
        )
      }
    </>
  )
}