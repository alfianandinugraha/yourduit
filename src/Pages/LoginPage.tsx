import React, { useContext } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useInputForm from '../Hooks/useInputForm'
import { authContext } from '../Store/AuthStore'
import { listLocation, LocationCurrency } from '../Store/UserInfoContext'
import { WhiteButton } from '../Style/Styled'

const LoginPage = () => {
  const { setLoggedIn } = useContext(authContext)

  const [inputName, setInputName] = useInputForm()
  const [inputCurrency, setInputCurrency] = useInputForm(listLocation[0].locale)

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
                listLocation.map((currency: LocationCurrency) => {
                  return (
                    <option value={currency.locale} key={currency.locale}>
                      {currency.currency} 
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
            <Link to="/dashboard">
              <WhiteButton
                className="text-primary w-100 m-auto"
                onClick={
                  () => {
                    localStorage.setItem('yourduit.netlify.app-name', inputName)
                    localStorage.setItem('yourduit.netlify.app-currency', inputCurrency)
                    setLoggedIn(true)
                  }
                }
              >Next</WhiteButton>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginPage
