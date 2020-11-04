import React, { useContext, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { PlusIcon } from '../Common/PlusIcon';
import useInputForm from '../Hooks/useInputForm';
import { Activity, activityContext } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'
import { ActivityFormButton, ActivityFormButtonGroup, ActivityFormTitle, ActivityFormWrapper, Circle } from '../Style/Styled';
import { Backdrop } from './Backdrop';

interface Props {
  activity?: Activity
}

const defaultActivity: Activity = {
  id: 0,
  nominal: 0,
  type: "1",
  description: "",
  updatedAt: 0,
  createdAt: 0
};

export const ActivityForm = (props: Props = {activity: defaultActivity}) => {
  const { isActivityFormShow, setIsActivityFormShow } = useContext(themeContext);
  const { addActivity } = useContext(activityContext);
  const [valueDescription, setValueDescription] = useInputForm("")
  const [valueNominal, setValueNominal] = useInputForm("")
  const [valueDate, setValueDate] = useState(0)

  const addActivityHandler = (type: "1" | "0") => {
    addActivity({
      description: valueDescription,
      nominal: +valueNominal,
      id: valueDate,
      createdAt: valueDate,
      updatedAt: valueDate,
      type: type
    })
    setIsActivityFormShow(false)
  }

  return (
    <>
      {
        !isActivityFormShow ? null : (
          <>
          <ActivityFormWrapper className="position-fixed w-100">
            <Container className="py-3 h-100 d-flex flex-column">
              <Row className="mb-4">
                <Col className="d-flex justify-content-between">
                  <ActivityFormTitle>Add Activity</ActivityFormTitle>
                  <Circle
                    width="30.87px"
                    height="30.87px"
                    className="bg-danger d-flex justify-content-center align-items-center cursor-pointer"
                    onClick={() => setIsActivityFormShow(false)}
                  >
                    <PlusIcon width="13px" height="13px" rotate="45deg"/>
                  </Circle>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="input" placeholder="Order a food" onChange={setValueDescription}/>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="number" placeholder="1.99" onChange={setValueNominal}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control type="date" onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      const datePicked = new Date(e.target.value).getTime()
                      setValueDate(datePicked)
                    }
                  } />
                </Col>
              </Row>
              <ActivityFormButtonGroup>
                <Col>
                  <p className="text-center mb-1">Type of activity</p>
                  <div className="d-flex justify-content-between">
                    <ActivityFormButton
                      variant="danger"
                      onClick={() => addActivityHandler("0")}
                    >Spending</ActivityFormButton>
                    <ActivityFormButton
                      variant="primary"
                      onClick={() => addActivityHandler("1")}
                    >Income</ActivityFormButton>
                  </div>
                </Col>
              </ActivityFormButtonGroup>
            </Container>
          </ActivityFormWrapper>    
          <Backdrop />
          </>
        )
      }
    </>
  )
}
