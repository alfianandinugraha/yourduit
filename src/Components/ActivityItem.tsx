import React from 'react'
import {Activity} from '../Store/ActivityStore'

const ActivityItem = (props: Activity) => {
  return (
    <div className="d-flex mb-2">
      <div>{props.description}</div>
      <div className={`ml-auto text-${props.type === "1" ? "danger" : "primary"}`}>{props.nominal}</div>
    </div>
  )
}

export default ActivityItem
