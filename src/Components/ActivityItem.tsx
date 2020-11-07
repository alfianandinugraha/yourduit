import React, { useContext, useState } from 'react'
import {Activity} from '../Store/ActivityStore'
import { userInfoContext } from '../Store/UserInfoContext'

const ActivityItem = (props: Activity) => {
  const { userInfo } = useContext(userInfoContext)
  const [nominal] = useState<string>(new Intl.NumberFormat(userInfo.location.locale).format(props.nominal))

  return (
    <div className="d-flex mb-2">
      <div>{props.description}</div>
      <div
        className={`ml-auto text-${props.type === "1" ? "primary" : "danger"}`}
      >
        {userInfo.location.currency}{nominal}
      </div>
    </div>
  )
}

export default ActivityItem
