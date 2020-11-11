import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { AboutCreatorBio, AboutCreatorContactWrapper, BackgroundHero, AboutCreatorGreeting} from '../Style/Styled'

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
        <AboutCreatorGreeting>
          <Col>
            <h4 className="text-center">Hello world !!!</h4>
          </Col>
        </AboutCreatorGreeting>
        <Row>
          <Col>
            <AboutCreatorBio>
              My name is Alfian Andi Nugraha, I'm a web developer based on Indonesia. I love any thing about Javascript world, if you have any question or feedback feel free to contact me
            </AboutCreatorBio>
          </Col>
        </Row>
        <AboutCreatorContactWrapper>
          <Col className="text-center">
            <a href="https://linktr.ee/alfianandinugraha" target="_blank" rel="noreferrer">https://linktr.ee/alfianandinugraha</a>
          </Col>
        </AboutCreatorContactWrapper>
      </LayoutProtectedPage>
    </>
  )
}
