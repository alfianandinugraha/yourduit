import React, { useContext, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import useInputForm from '../Hooks/useInputForm'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { listLocation, LocationCurrency, userInfoContext } from '../Store/UserInfoContext'
import { BackgroundHero } from '../Style/Styled'

export const SettingsProfilePage = () => {
  const { userInfo } = useContext(userInfoContext)
  const { name, location } = userInfo

  const [inputName, setInputName] = useInputForm(name)
  const [inputLocale, setInputLocale] = useInputForm(location.locale)

  return (
    <>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="402px"/>
      <LayoutProtectedPage disableCashSummary={true}>
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
      </LayoutProtectedPage>
    </>
  )
}
