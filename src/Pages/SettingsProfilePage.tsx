import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { saveUserToLocalStorage } from '../Functions/LocalStorage'
import useInputForm from '../Hooks/useInputForm'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { listLocation, LocationCurrency, userInfoContext } from '../Store/UserInfoContext'
import { BackgroundHero } from '../Style/Styled'

export const SettingsProfilePage = () => {
  const { userInfo, setUserInfo } = useContext(userInfoContext)
  const { name, location } = userInfo

  const [inputName, setInputName] = useInputForm(name)
  const [inputLocale, setInputLocale] = useInputForm(location.locale)

  return (
    <>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="402px"/>
      <LayoutProtectedPage disableCashSummary={true} style={{ marginBottom: '3rem' }}>
        <h1 className="text-white">Settings</h1>
        <Row className="text-white">
          <Col className="col-12" style={{marginTop: '33px'}}>
            <label>Name</label>
            <Form.Control type="text" value={inputName} onChange={setInputName}/>
          </Col>
          <Col className="col-12" style={{marginTop: '33px'}}>
            <label>Currency</label>
            <Form.Control as="select" onChange={setInputLocale} value={inputLocale}>
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
        <Container className="position-fixed" style={
          {
            width: '100%',
            bottom: '1rem',
            marginLeft: '-15px'
          }
        }>
          <Row>
            <Col className="col-12">
              <Button
                variant="primary w-100"
                onClick={() => {
                  saveUserToLocalStorage(inputName, inputLocale)
                  setUserInfo({
                    name: inputName,
                    location: {
                      locale: inputLocale,
                      currency: listLocation.filter((val) => val.locale === inputLocale)[0].currency
                    }
                  })
                }}
              >Save</Button>
            </Col>
          </Row>
        </Container>
      </LayoutProtectedPage>
    </>
  )
}
