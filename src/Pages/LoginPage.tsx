import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import useInputForm from '../Hooks/useInputForm'

const LoginPage = () => {
  const [listCurrency] = useState<{ name: string; value: string }[]>([
    {
      name: 'Indonesia Rupiah',
      value: 'rp'
    },
    {
      name: 'US Dollar',
      value: '$'
    }
  ])

  const [inputName, setInputName] = useInputForm()
  const [inputCurrency, setInputCurrency] = useInputForm(listCurrency[0].value)

  return (
    <div className="bg-primary w-100 d-flex text-white position-relative" style={{ height: '100vh' }}>
      <Container className="m-auto">
        <Row>
          <Col sm="12">
            <h1 className="text-center">yourDuit</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" className="text-center">
            <div>Insert your name</div>
            <Form.Control 
              type="text" 
              placeholder="John Doe" 
              className="mt-2"
              onChange={setInputName}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" className="text-center">
            <div>Select your currency</div>
            <Form.Control as="select" className="mt-2" onChange={setInputCurrency}>
              {
                listCurrency.map((currency) => {
                  return (
                    <option value={currency.value} key={currency.value}>
                      {currency.name} ({currency.value}) 
                    </option>
                  )
                })
              }
            </Form.Control>
          </Col>
        </Row>
      </Container>
      <Container className="position-absolute p-0" style={{bottom: '16px'}}>
        <Row className="w-100 m-auto">
          <Col sm="12">
            <Button style={
              {
                backgroundColor: 'white',
                boxShadow: '0 3px 6px 0px rgba(00,00,00, 0.16)',
              }
            }
              className="text-primary w-100 m-auto"
              onClick={
                () => {
                  localStorage.setItem('name', inputName)
                  localStorage.setItem('currency', inputCurrency)
                }
              }
            >Next</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginPage
