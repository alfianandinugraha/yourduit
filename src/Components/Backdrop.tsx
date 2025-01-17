import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { themeContext } from '../Store/ThemeStore'
import { BackdropWrapper } from '../Style/Styled'

interface Props {
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const Backdrop = (props: Props) => {
  const { isBackdropShow } = useContext(themeContext)

  return (
    <div onClick={props.onClick}>
      <CSSTransition in={isBackdropShow} timeout={500} classNames="backdrop-fade" unmountOnExit>
        <div style={
          {zIndex: 10, position: 'absolute'}
        }>
          <BackdropWrapper />
        </div>
      </CSSTransition>
    </div>
  )
}
