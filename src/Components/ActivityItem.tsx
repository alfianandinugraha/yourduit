import React, { useContext } from 'react'
import {Activity} from '../Store/ActivityStore'
import { userInfoContext } from '../Store/UserInfoContext'

const ActivityItem = (props: Activity) => {
  const { userInfo } = useContext(userInfoContext)
  const { location } = userInfo

  return (
    <div className="d-flex mb-2">
      <div>{props.description}</div>
      <div className={`ml-auto text-${props.type === "1" ? "primary" : "danger"}`}>{location.currency}{props.nominal}</div>
    </div>
  )
}

export default ActivityItem
