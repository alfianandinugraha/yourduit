import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CalendarIcon } from '../Common/CalendarIcon'
import { DollarIcon } from '../Common/DollarIcon'
import { UserIcon } from '../Common/UserIcon'
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
              <Row style={{ marginTop: '2.5rem'}}>
                <Col className="col-12">
                  <Link to="/dashboard" style={{color: '#747474'}}>
                    <DollarIcon style={{marginRight: '1rem'}}/>
                    <span>Dashboard</span>
                  </Link>
                </Col>
                <Col className="col-12 mt-4">
                  <Link to="/activities" style={{color: '#747474'}}>
                    <CalendarIcon style={{ marginRight: '1rem' }} fill="#747474" height="20.2" width="18.23"/>
                    <span>Calendar</span>
                  </Link>
                </Col>
                <Col className="col-12 mt-4">
                  <UserIcon style={{marginRight: '1rem'}}/>
                  <span>About Creator</span>
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
