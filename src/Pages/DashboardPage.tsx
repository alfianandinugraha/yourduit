import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { CalendarIcon } from '../Common/CalendarIcon'
import ActivityItem from '../Components/ActivityItem'
import { CashBoard } from '../Components/CashBoard'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { activityContext } from '../Store/ActivityStore'
import { BackgroundHero, GreetingDashboard, ListActivityDashboard, TopRightElementPosition } from '../Style/Styled'

const DashboardPage = () => {
  const { activities, getTotalNominalThisMonth } = useContext(activityContext)
  const { income, spending } = getTotalNominalThisMonth()
  const history = useHistory()

  return (
    <>
      <TopRightElementPosition>
        <Row>
          <Col className="d-flex">
            <div className="ml-auto" onClick={() => history.push('/activities')}>
              <CalendarIcon fill="white"/>
            </div>
          </Col>
        </Row>
      </TopRightElementPosition>
    <LayoutProtectedPage>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="406px" />
      <GreetingDashboard>
        <Col sm="12">
          <span>Welcome,</span>
        </Col>
        <Col sm="12">
          <h1>Alfian Andi</h1>
        </Col>
      </GreetingDashboard>
      <Row>
        <Col md="6">
          <CashBoard nominal={spending} text="Spending this month" color="danger"/>
        </Col>
        <Col md="6">
          <CashBoard nominal={income} text="Income this month" color="primary"/>
        </Col>
      </Row>
      <ListActivityDashboard style={{marginBottom: '120px'}}>
        <Col>
          <div><b>Recent Activity</b></div>
          <div className="mt-3">
            {
              activities.map((val) => <ActivityItem {...val} key={val.id}/>)
            }
          </div>
        </Col>
      </ListActivityDashboard>
    </LayoutProtectedPage>
    </>
  )
}

export default DashboardPage
