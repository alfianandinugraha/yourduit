import React, { useContext } from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { CalendarIcon } from '../Common/CalendarIcon'
import { DollarIcon } from '../Common/DollarIcon'
import { HamburgerIcon } from '../Common/HamburgerIcon'
import { LockIcon } from '../Common/LockIcon'
import { SettingIcon } from '../Common/SettingIcon'
import { UserIcon } from '../Common/UserIcon'
import { authContext } from '../Store/AuthStore'
import { themeContext } from '../Store/ThemeStore'
import { SidebarHeader, SidebarHero, SidebarLinkContainer, SidebarWrapper } from '../Style/Styled'

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
      <Col className="col-12 mt-4">
        <Link to="/settings" style={{ color: '#747474' }} onClick={hideSidebar}>
          <SettingIcon style={{ marginRight: '1rem' }} fill="#747474" height="20.2" width="18.23" />
          <span>Settings Profile</span>
        </Link>
      </Col>
    </>
  )

  return (
    <>
      <CSSTransition in={isSidebarShow} timeout={500} classNames="sidebar-slide" unmountOnExit>
        <SidebarWrapper>
          <Container className="position-fixed w-50" style={{ top: 24, zIndex: 1000, marginLeft:"-15px" }}>
            <HamburgerIcon onClick={hideSidebar} />
          </Container>
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
              isLoggedIn ? protectedNavigation : (
                <Col className="col-12">
                  <Link to="/" style={{ color: '#747474' }} onClick={hideSidebar}>
                    <LockIcon style={{ marginRight: '1rem' }} fill="#747474" height="20.2" width="18.23" />
                    <span>Log In</span>
                  </Link>
                </Col>
              )
            }
            <Col className={`col-12 position-absolute mt-${!isLoggedIn ? '0' : '4'}`} style={{bottom: '1rem'}}>
              <Link className="w-100" to="/creator">
                <Button variant="primary w-100" onClick={hideSidebar}>
                  <UserIcon style={{marginRight: '1rem'}} fill="white"/>
                  <span>About Creator</span>
                </Button>
              </Link>
            </Col>
          </SidebarLinkContainer>
        </SidebarWrapper>
      </CSSTransition>
    </>
  )
}
