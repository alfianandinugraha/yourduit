import React, { useContext } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LiquidBackground } from '../Components/LiquidBackground'
import { saveUserToLocalStorage } from '../Functions/LocalStorage'
import useInputForm from '../Hooks/useInputForm'
import { authContext } from '../Store/AuthStore'
import { listLocation, LocationCurrency, userInfoContext } from '../Store/UserInfoContext'
import { WhiteButton } from '../Style/Styled'

const LoginPage = () => {
  const { setLoggedIn } = useContext(authContext)
  const {setUserInfo} = useContext(userInfoContext)

  const [inputName, setInputName] = useInputForm()
  const [inputCurrency, setInputCurrency] = useInputForm(listLocation[0].locale)

  return (
    <>
    <LiquidBackground zIndex={1} left="-100px" top="-200px"/>
    <LiquidBackground zIndex={1} left="-100px" bottom="-200px"/>
    <div
      className="bg-primary w-100 d-flex text-white position-relative justify-content-center"
      style={{ height: '100vh' }}
    >
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
      <Container className="position-absolute p-0" style={{bottom: '16px', zIndex: 2}}>
        <Row className="w-100 m-auto">
          <Col sm="12">
            <Link to="/dashboard">
              <WhiteButton
                className="text-primary w-100 m-auto"
                onClick={
                  () => {
                    saveUserToLocalStorage(inputName, inputCurrency)
                    setUserInfo({
                      name: inputName,
                      location: {
                        locale: inputCurrency,
                        currency: listLocation.filter((val) => val.locale === inputCurrency)[0].currency
                      }
                    })
                    setLoggedIn(true)
                  }
                }
              >Next</WhiteButton>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default LoginPage
