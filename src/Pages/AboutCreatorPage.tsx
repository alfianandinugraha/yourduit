import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { BackgroundHero } from '../Style/Styled'

export const AboutCreatorPage = () => {
  return (
    <>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="232px" />
      <LayoutProtectedPage disableCashSummary={true}>
        <Row>
          <Col>
            <div
              className="d-flex justify-content-center"
              style={{
                marginTop: '3.5rem'
              }}
            >
              <img 
                src="/alfianandi-photo.jpg" 
                alt="Alfian andi nugraha" 
                height="168px" 
                width="168px"
                style={{
                  borderRadius: '50%',
                  border: '10px solid white',
                  boxSizing: 'content-box'
                }}
              />
            </div>
          </Col>
        </Row>
      </LayoutProtectedPage>
    </>
  )
}
