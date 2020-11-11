import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { AlertWrapper } from '../Style/Styled'

interface Props {
  message: string;
  variant: "primary" | "danger";
  isShow: boolean;
}

export const Alert = (props: Props) => {
  return (
    <CSSTransition timeout={300} in={props.isShow} unmountOnExit classNames="alert-slide">
      <AlertWrapper>
        <div className={`alert-border bg-${props.variant}`}></div>
        <div className={`alert-content text-${props.variant}`}>
          {props.message}
        </div>
      </AlertWrapper>
    </CSSTransition>
  )
}
