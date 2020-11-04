import React, { useContext } from 'react'
import { themeContext } from '../Store/ThemeStore'
import { BackdropWrapper } from '../Style/Styled'

interface Props {
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const Backdrop = (props: Props) => {
  const {isBackdropShow} = useContext(themeContext)

  return (
    <div onClick={props.onClick}>
      {
        isBackdropShow ? <BackdropWrapper /> : null 
      } 
    </div>
  )
}
