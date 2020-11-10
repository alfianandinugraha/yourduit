import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { themeContext } from '../Store/ThemeStore'
import { SidebarWrapper } from '../Style/Styled'
import { Backdrop } from './Backdrop'

export const Sidebar = () => {
  const { isSidebarShow, resetActivityFormShow } = useContext(themeContext)

  return (
    <>
      {
        !isSidebarShow ? null : (
          <>
            <SidebarWrapper>
              <div className="bg-primary position-absolute" style={
                {
                  height: '142px',
                  top: 0,
                  left: 0,
                  width: '100%'
                }
              }></div>
              <Row style={
                {
                  marginTop: '80px'
                }
              }>
                <Col>
                  <h1 className="text-white" style={
                    {
                      fontSize: '35px',
                      fontWeight: 800
                    }
                  }>yourDuit</h1>
                </Col>
              </Row>
            </SidebarWrapper>
            <Backdrop onClick={() => resetActivityFormShow()}/>
          </>
        )
      }
    </>
  )
}
