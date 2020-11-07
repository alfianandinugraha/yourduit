import React, { ReactNode, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CashSummaryWrapper, Circle } from '../Style/Styled'
import { PlusIcon } from '../Common/PlusIcon'
import { activityContext } from '../Store/ActivityStore'
import { themeContext } from '../Store/ThemeStore'
import { AddActivityForm } from './AddActivityForm'
import { userInfoContext } from '../Store/UserInfoContext'

interface Props {
  nominal: number;
}

export const CashSummary = (props: Props) => {
  const { setIsActivityFormShow, setIsBackdropShow } = useContext(themeContext)
  const { userInfo } = useContext(userInfoContext)
  const { location } = userInfo

  return (
    <>
      <CashSummaryWrapper className="position-fixed w-100">
        <Container>
          <Row>
            <Col className="d-flex">
              <div>
                <div>Cash this month</div>
                <div className="d-flex text-primary">
                  <span>{location.currency}</span>
                  <h1>{new Intl.NumberFormat(location.locale).format(props.nominal)}</h1>
                </div>
              </div>
              <div className="ml-auto">
                <Circle 
                  width="70px" 
                  height="70px" 
                  className="bg-primary d-flex justify-content-center align-items-center cursor-pointer"
                  onClick={
                    () => {
                      setIsActivityFormShow(true)
                      setIsBackdropShow(true)
                    }
                  }
                >
                  <PlusIcon/>
                </Circle>
              </div>
            </Col>
          </Row>
        </Container>
      </CashSummaryWrapper>
      <AddActivityForm />
    </>
  )
}

export const IncludeCashSummary = ({ children }: { children: ReactNode }) => {
  const { getTotalNominalThisMonth } = useContext(activityContext)
  const { summary } = getTotalNominalThisMonth()

  return (
    <>
      {children}
      <CashSummary nominal={summary} />
      <AddActivityForm />
    </>
  )
}
