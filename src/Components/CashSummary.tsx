import React, { ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CashSummaryWrapper } from '../Style/Styled'

interface Props {
  nominal: number;
}

export const CashSummary = (props: Props) => {
  return (
    <CashSummaryWrapper className="position-fixed w-100">
      <Container>
        <Row>
          <Col>
            <div>
              <div>Cash this month</div>
              <div className="d-flex text-primary">
                <span>Rp</span>
                <h1>{props.nominal}</h1>
              </div>
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
