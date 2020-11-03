import React, { ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CashSummaryWrapper, Circle } from '../Style/Styled'
import { PlusIcon } from '../Common/PlusIcon'

interface Props {
  nominal: number;
}

export const CashSummary = (props: Props) => {
  return (
    <CashSummaryWrapper className="position-fixed w-100">
      <Container>
        <Row>
          <Col className="d-flex">
            <div>
              <div>Cash this month</div>
              <div className="d-flex text-primary">
                <span>Rp</span>
                <h1>{props.nominal}</h1>
              </div>
            </div>
            <div className="ml-auto">
              <Circle width="70px" height="70px" className="bg-primary d-flex justify-content-center align-items-center">
                <PlusIcon/>
              </Circle>
            </div>
          </Col>
        </Row>
      </Container>
    </CashSummaryWrapper>
  )
}

export const IncludeCashSummary = ({ children }: {children: ReactNode}) => {
  return (
    <>
      {children}
      <CashSummary nominal={700000}/>
    </>
  )
}
