import React, { ReactNode } from 'react'
import { CashSummaryWrapper } from '../Style/Styled'

interface Props {
  nominal: number;
}

export const CashSummary = (props: Props) => {
  return (
    <CashSummaryWrapper>
      <h1>this is cash summary</h1>
    </CashSummaryWrapper>
  )
}

export const IncludeCashSummary = ({ children }: {children: ReactNode}) => {
  return (
    <>
      {children}
      <CashSummary nominal={700000}/>
    </>
  )
}
