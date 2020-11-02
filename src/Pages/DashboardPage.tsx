import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import ActivityItem from '../Components/ActivityItem'
import { CashBoard } from '../Components/CashBoard'
import { activityContext } from '../Store/ActivityStore'

const DashboardPage = () => {
  const {activities} = useContext(activityContext)

  return (
    <>
      <div className="bg-primary w-100 position-absolute" style={{
        height: "406px",
        top: "0",
        left: "0",
        borderRadius: "0 0 20px 20px",
        zIndex: -1
      }}></div>
      <Row style={
        {
          marginTop: "79px",
          color: "white"
        }
      }>
        <Col sm="12">
          <span>Welcome,</span>
        </Col>
        <Col sm="12">
          <h1>Alfian Andi</h1>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <CashBoard nominal={700000} text="Spending this month" color="danger" currency="Rp"/>
        </Col>
        <Col md="6">
          <CashBoard nominal={1500000} text="Income this month" color="primary" currency="Rp"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <div><b>Recent Activity</b></div>
          <div className="mt-3">
            {
              activities.map((val) => <ActivityItem {...val}/>)
            }
          </div>
        </Col>
      </Row>
    </>
  )
}

export default DashboardPage
