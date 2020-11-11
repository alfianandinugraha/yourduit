import React from 'react'
import { AlertWrapper } from '../Style/Styled'

interface Props {
  message: string;
  variant: "primary" | "danger";
}

export const Alert = (props: Props) => {
  return (
    <AlertWrapper>
      <div className={`alert-border bg-${props.variant}`}></div>
      <div className={`alert-content text-${props.variant}`}>
        {props.message}
      </div>
    </AlertWrapper>
  )
}
