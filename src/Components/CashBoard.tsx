import React from 'react'
import { CashBoardContent, CashBoardWrapper } from '../Style/Styled'

interface Props {
  nominal: number;
  text: string;
  color: string;
  currency: string;
}

export const CashBoard = (props: Props) => {
  return (
    <CashBoardWrapper className={`border-${props.color}`}>
      <CashBoardContent>
        <div>{props.text}</div>
        <div className={`text-${props.color} d-flex`} style={{marginTop: '10px'}}>
          <span>{props.currency}</span>
          <h1>{new Intl.NumberFormat('id-ID').format(props.nominal)}</h1>
        </div>
      </CashBoardContent>
    </CashBoardWrapper>
  )
}
