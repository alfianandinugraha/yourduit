import React, { ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'

interface Props {
  children: ReactNode;
  state: boolean;
}

export const ActivityFormAnimation = (props: Props) => {
  return (
    <>
      <CSSTransition
        in={props.state}
        timeout={500}
        classNames="activity-form-slide"
        unmountOnExit
      >
        {props.children}
      </CSSTransition>
    </>
  )
}
