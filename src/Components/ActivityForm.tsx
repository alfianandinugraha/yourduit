import React, { useContext, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { PlusIcon } from '../Common/PlusIcon';
import useDate from '../Hooks/useDate';
import useInputForm from '../Hooks/useInputForm';
import { Activity } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'
import { ActivityFormButton, ActivityFormButtonGroup, ActivityFormTitle, ActivityFormWrapper, Circle } from '../Style/Styled';
import { Alert } from './Alert';

interface ActivityFormPayload {
  description: string;
  nominal: number;
  timestamp: number;
  type: "1" | "0";
}

interface Props {
  activity?: Activity,
  getPayload?: (payload: ActivityFormPayload) => void
}

const defaultProps: Activity = {
  id: 0,
  nominal: 0,
  type: "1",
  description: "",
  updatedAt: 0,
  createdAt: 0,
};

export const ActivityForm = (props: Props = { activity: defaultProps }) => {
  const { resetActivityFormShow } = useContext(themeContext);
  const [valueDescription, setValueDescription] = useInputForm(props.activity?.description || "")
  const [valueNominal, setValueNominal] = useInputForm(props.activity?.nominal.toString() || "")
  const {
    getDay,
    getMonth,
    getFullYear,
    getTime,
    setDate
  } = useDate(props.activity?.updatedAt || new Date().getTime())
  const [valueDate, setValueDate] = useState(getTime)

  const buttonTypeHandler = (type: "1" | "0") => {
    if (!valueDescription || !valueNominal || !valueDate) {
      alertHandler()
      return
    }

    if (!props.getPayload) return
    setIsAlertShow(false)
    props.getPayload(
      {
        description: valueDescription,
        nominal: +valueNominal,
        type: type,
        timestamp: valueDate
      }
    )
    resetActivityFormShow()
  }

  const [isAlertShow, setIsAlertShow] = useState(false)

  const alertHandler = () => {
    setIsAlertShow(true)
    setTimeout(() => {
      setIsAlertShow(false)
    }, 2000)
  }

  return (
    <>
      <Alert message="Please fill the form" variant="danger" isShow={isAlertShow}/>
      <ActivityFormWrapper className="position-fixed w-100">
        <Container className="py-3 h-100 d-flex flex-column">
          <Row className="mb-4">
            <Col className="d-flex justify-content-between">
              <ActivityFormTitle>Add Activity</ActivityFormTitle>
              <Circle
                width="30.87px"
                height="30.87px"
                className="bg-danger d-flex justify-content-center align-items-center cursor-pointer"
                onClick={() => {
                  setIsAlertShow(false)
                  setTimeout(() => {
                    resetActivityFormShow()
                  }, isAlertShow ? 500 : 0)
                }}
              >
                <PlusIcon width="13px" height="13px" rotate="45deg"/>
              </Circle>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Form.Control
                type="input"
                placeholder="Order a food"
                onChange={setValueDescription}
                value={valueDescription}
              />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Form.Control
                type="number"
                placeholder="1.99"
                onChange={setValueNominal}
                value={valueNominal}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type="date" value={`${getFullYear}-${getMonth}-${getDay}`} onChange={
                (e: React.ChangeEvent<HTMLInputElement>) => {
                  const datePicked = new Date(e.target.value).getTime()
                  setDate(datePicked)
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
                  onClick={() => buttonTypeHandler("0")}
                >Spending</ActivityFormButton>
                <ActivityFormButton
                  variant="primary"
                  onClick={() => buttonTypeHandler("1")}
                >Income</ActivityFormButton>
              </div>
            </Col>
          </ActivityFormButtonGroup>
        </Container>
      </ActivityFormWrapper>
    </>
  )
}
