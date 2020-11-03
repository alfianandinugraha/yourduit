import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { PlusIcon } from '../Common/PlusIcon';
import { Activity } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'
import { ActivityFormTitle, ActivityFormWrapper, Circle } from '../Style/Styled';

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
  const { isActivityFormShow } = useContext(themeContext);

  return (
    <>
      {
        !isActivityFormShow ? null : (
          <ActivityFormWrapper className="position-fixed w-100">
            <Container>
              <Row>
                <Col className="d-flex justify-content-between">
                  <ActivityFormTitle>Add Activity</ActivityFormTitle>
                  <Circle
                    width="30.87px"
                    height="30.87px"
                    className="bg-danger d-flex justify-content-center align-items-center cursor-pointer"
                  >
                    <PlusIcon width="13px" height="13px"/>
                  </Circle>
                </Col>
              </Row>
            </Container>
          </ActivityFormWrapper>
        )
      }
    </>
  )
}
