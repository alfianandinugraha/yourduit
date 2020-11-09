import React, { useContext } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import useInputForm from '../Hooks/useInputForm'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { activityContext } from '../Store/ActivityStore'
import { BackgroundHero } from '../Style/Styled'

export const ActivitiesPage = () => {
  const { getAllActivitiesByDate } = useContext(activityContext)

  const [dateFromValue, setDateFromValue] = useInputForm("")
  const [dateToValue, setDateToValue] = useInputForm("")

  return (
    <LayoutProtectedPage>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="311px" />
      <Row>
        <Col>
          <h1 className="text-white">Activities</h1>
        </Col>
      </Row>
      <Row className="text-white mt-4">
        <Col className="col-6">
          <span>From</span>
          <Form.Control type="date" onChange={setDateFromValue} />
        </Col>
        <Col className="col-6">
          <span>To</span>
          <Form.Control type="date" onChange={setDateToValue} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-12">
          <div className="bg-white d-flex text-center" style={
            {
              justifyContent: 'space-around',
              borderRadius: '5px',
              padding: '1rem 0',
              boxShadow: '0 3px 6px 0 rgba(00,00,00, 0.16)'
            }
          }>
            <div>
              <span>Spending</span>
              <div className="text-danger"><b>Rp10000</b></div>
            </div>
            <div>
              <span>Income</span>
              <div className="text-primary"><b>Rp10000</b></div>
            </div>
          </div>
        </Col>
      </Row>
    </LayoutProtectedPage>
  )
}
