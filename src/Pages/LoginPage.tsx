import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <div className="bg-primary w-100 d-flex text-white" style={{ height: '100vh' }}>
      <Container className="m-auto">
        <Row>
          <Col sm="12">
            <h1 className="text-center">yourDuit</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" className="text-center">
            <div>Insert your name</div>
            <Form.Control type="text" placeholder="John Doe" className="mt-2"/>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" className="text-center">
            <div>Select your currency</div>
            <Form.Control as="select" className="mt-2">
              <option>US Dollar</option>
              <option>Indonesia Rupiah</option>
            </Form.Control>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginPage
