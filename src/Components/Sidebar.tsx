import React, { useContext } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CalendarIcon } from '../Common/CalendarIcon'
import { DollarIcon } from '../Common/DollarIcon'
import { HamburgerIcon } from '../Common/HamburgerIcon'
import { UserIcon } from '../Common/UserIcon'
import { authContext } from '../Store/AuthStore'
import { themeContext } from '../Store/ThemeStore'
import { SidebarHeader, SidebarHero, SidebarLinkContainer, SidebarWrapper } from '../Style/Styled'
import { Backdrop } from './Backdrop'

export const Sidebar = () => {
  const { isSidebarShow, resetActivityFormShow } = useContext(themeContext)
  const { isLoggedIn } = useContext(authContext)

  const hideSidebar = () => resetActivityFormShow()

  const protectedNavigation = (
    <>
      <Col className="col-12">
        <Link to="/dashboard" style={{ color: '#747474' }} onClick={hideSidebar}>
          <DollarIcon style={{ marginRight: '1rem' }} />
          <span>Dashboard</span>
        </Link>
      </Col>
      <Col className="col-12 mt-4">
        <Link to="/activities" style={{ color: '#747474' }} onClick={hideSidebar}>
          <CalendarIcon style={{ marginRight: '1rem' }} fill="#747474" height="20.2" width="18.23" />
          <span>Calendar</span>
        </Link>
      </Col>
    </>
  )

  return (
    <>
      {
        !isSidebarShow ? null : (
          <>
            <Container className="position-absolute w-50" style={{ top: 24, zIndex: 1000 }}>
              <HamburgerIcon onClick={hideSidebar} />
            </Container>
            <SidebarWrapper>
              <SidebarHero className="bg-primary position-absolute"/>
              <SidebarHeader>
                <Col>
                  <h1 className="text-white" style={
                    {
                      fontSize: '35px',
                      fontWeight: 800
                    }
                  }>yourDuit</h1>
                </Col>
              </SidebarHeader>
              <SidebarLinkContainer>
                {
                  !isLoggedIn ? null : protectedNavigation
                }
                <Col className={`col-12 mt-${!isLoggedIn ? '0' : '4'}`}>
                  <UserIcon style={{marginRight: '1rem'}}/>
                  <span>About Creator</span>
                </Col>
              </SidebarLinkContainer>
            </SidebarWrapper>
            <Backdrop onClick={() => resetActivityFormShow()}/>
          </>
        )
      }
    </>
  )
}
