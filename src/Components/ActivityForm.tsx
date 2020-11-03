import React, { useContext } from 'react'
import { Activity } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'

interface Props {
  activity?: Activity
}

const defaultActivity: Activity = {
  id: 0,
  nominal: 0,
  type: "1",
  description: "",
  updatedAt: 0,
  createdAt: 0
};

export const ActivityForm = (props: Props = {activity: defaultActivity}) => {
  const { isActivityFormShow } = useContext(themeContext);

  return (
    <>
      {
        isActivityFormShow ? <h1>Hello world !</h1> : null
      }
    </>
  )
}
