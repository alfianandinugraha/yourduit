import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { Activity, activityContext } from '../Store/ActivityStore'
import { userInfoContext } from '../Store/UserInfoContext'
import { BackgroundHero } from '../Style/Styled'

export const ActivityPage = () => {
  const { id }: { id: string } = useParams()
  const { getActivityById } = useContext(activityContext)
  const { userInfo } = useContext(userInfoContext)
  const [activity] = useState<Activity>(getActivityById(+id))
  const date = {
    days: new Date(activity.updatedAt).getDay() + 1,
    months: new Date(activity.updatedAt).getMonth() + 1,
    years: new Date(activity.updatedAt).getFullYear(),
  }

  return (
    <LayoutProtectedPage>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="106px"/>
      <Row className="text-white bg-primary pb-3 mb-3" style={{ borderRadius: "0 0 20px 20px"}}>
        <Col className="col-12">
          <h1>{activity.description}</h1>
        </Col>
        <Col>
          <span>{`${date.months}/${date.days}/${date.years}`}</span>
        </Col>
      </Row>
      <Row>
        <Col className={`d-flex text-${activity.type === "1" ? "primary" : "danger"}`}>
          <span>{userInfo.location.currency}</span>
          <h1>{new Intl.NumberFormat(userInfo.location.locale).format(activity.nominal)}</h1>
        </Col>
      </Row>
    </LayoutProtectedPage>
  )
}
