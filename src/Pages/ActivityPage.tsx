import React, { useContext, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { PenIcon } from '../Common/PenIcon'
import { TrashIcon } from '../Common/TrashIcon'
import { UpdateActivityForm } from '../Components/UpdateActivityForm'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { Activity, activityContext } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'
import { userInfoContext } from '../Store/UserInfoContext'
import { BackgroundHero } from '../Style/Styled'

export const ActivityPage = () => {
  const { id }: { id: string } = useParams()
  const { getActivityById, deleteActivity } = useContext(activityContext)
  const { setIsUpdateActivityFormShow } = useContext(themeContext)
  const history = useHistory()
  const { userInfo } = useContext(userInfoContext)
  const [activity] = useState<Activity>(getActivityById(+id))
  const date = {
    days: new Date(activity.updatedAt).getDay() + 1,
    months: new Date(activity.updatedAt).getMonth() + 1,
    years: new Date(activity.updatedAt).getFullYear(),
  }

  return (
    <>
      <LayoutProtectedPage>
      <Container className="position-absolute" style={
        {
          top: 24,
          right: 0
        }
      }>
        <Row>
          <Col className="d-flex">
            <div className="ml-auto" onClick={
              () => {
                deleteActivity(+id)
                history.push('/dashboard')
              }
            }><TrashIcon /></div>
            <div className="ml-4" onClick={
              () => {
                setIsUpdateActivityFormShow(true)
              }
            }><PenIcon /></div>
          </Col>
        </Row>
      </Container>
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
      <UpdateActivityForm idToUpdate={+id}/>
    </>
  )
}
