import React, { useContext } from 'react'
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
                  zIndex: 1000,
                  top: 0,
                  left: 0,
                  width: '100%'
                }
              }></div>
            </SidebarWrapper>
            <Backdrop onClick={() => resetActivityFormShow()}/>
          </>
        )
      }
    </>
  )
}
