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
            </SidebarWrapper>
            <Backdrop onClick={() => resetActivityFormShow()}/>
          </>
        )
      }
    </>
  )
}
