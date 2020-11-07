import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { Activity, activityContext } from '../Store/ActivityStore'

export const ActivityPage = () => {
  const { id }: { id: string } = useParams()
  const { getActivityById } = useContext(activityContext)
  const [activity] = useState<Activity>(getActivityById(+id))
  const date = {
    days: new Date(activity.updatedAt).getDay() + 1,
    months: new Date(activity.updatedAt).getMonth() + 1,
    years: new Date(activity.updatedAt).getFullYear(),
  }

  return (
    <LayoutProtectedPage>
      <Row>
        <Col className="col-12">
          <h1>{activity.description}</h1>
        </Col>
        <Col>
          <span>{`${date.months}/${date.days}/${date.years}`}</span>
        </Col>
      </Row>
    </LayoutProtectedPage>
  )
}
