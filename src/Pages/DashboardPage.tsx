import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CashBoard } from '../Components/CashBoard'

const DashboardPage = () => {
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
          <CashBoard nominal={700000}>
            <div className="text-danger">Spending this month</div>
          </CashBoard>
        </Col>
        <Col md="6">
          <CashBoard nominal={1500000}>
            <div className="text-primary">Income this month</div>
          </CashBoard>
        </Col>
      </Row>
    </>
  )
}

export default DashboardPage
