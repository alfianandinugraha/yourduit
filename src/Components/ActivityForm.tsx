import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Activity } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'
import { ActivityFormTitle, ActivityFormWrapper } from '../Style/Styled';

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
                <Col>
                  <ActivityFormTitle>Add Activity</ActivityFormTitle>
                </Col>
              </Row>
            </Container>
          </ActivityFormWrapper>
        )
      }
    </>
  )
}
