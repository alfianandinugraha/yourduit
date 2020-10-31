import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <div className="bg-primary w-100 d-flex text-white" style={{ height: '100vh' }}>
      <Container className="m-auto">
        <Row>
          <Col sm="12">
            <h1 className="text-center">yourDuit</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginPage
