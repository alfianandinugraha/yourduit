import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {Activity} from '../Store/ActivityStore'
import { userInfoContext } from '../Store/UserInfoContext'

const ActivityItem = (props: Activity) => {
  const { userInfo } = useContext(userInfoContext)
  const [nominal] = useState<string>(new Intl.NumberFormat(userInfo.location.locale).format(props.nominal))

  return (
    <Link
      className={`d-flex mb-2 text-${props.type === "1" ? "primary" : "danger"}`}
      to={`/activities/${props.id.toString()}`}
    >
      <div>{props.description}</div>
      <div className="ml-auto">
        {userInfo.location.currency}{nominal}
      </div>
    </Link>
  )
}

export default ActivityItem
