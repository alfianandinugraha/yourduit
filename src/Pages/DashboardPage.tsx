import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { CalendarIcon } from '../Common/CalendarIcon'
import ActivityItem from '../Components/ActivityItem'
import { CashBoard } from '../Components/CashBoard'
import { LiquidBackground } from '../Components/LiquidBackground'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { activityContext } from '../Store/ActivityStore'
import { userInfoContext } from '../Store/UserInfoContext'
import { BackgroundHero, GreetingDashboard, ListActivityDashboard, TopRightElementPosition } from '../Style/Styled'

const DashboardPage = () => {
  const { activities, getTotalNominalThisMonth } = useContext(activityContext)
  const { userInfo } = useContext(userInfoContext)
  const { income, spending } = getTotalNominalThisMonth()
  const history = useHistory()

  return (
    <>
      <LiquidBackground left="-378.64px" top="-57.06px" />
      <LiquidBackground left="54%" top="-24.06px" />
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
          <h1 style={{maxHeight: '56px', overflow: 'hidden'}}>{userInfo.name}</h1>
        </Col>
      </GreetingDashboard>
      <Row>
        <Col className="col-12">
          <CashBoard nominal={spending} text="Spending this month" color="danger"/>
        </Col>
        <Col className="col-12">
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
