import React, { useContext } from 'react'
import { themeContext } from '../Store/ThemeStore'
import { BackdropWrapper } from '../Style/Styled'

export const Backdrop = () => {
  const {isBackdropShow} = useContext(themeContext)

  return (
    <>
      {
        isBackdropShow ? <BackdropWrapper /> : null 
      } 
    </>
  )
}
