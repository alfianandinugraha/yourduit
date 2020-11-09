import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
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
          <input type="date" onChange={setDateFromValue} />
          <input type="date" onChange={setDateToValue} />
        </Col>
      </Row>
    </LayoutProtectedPage>
  )
}
