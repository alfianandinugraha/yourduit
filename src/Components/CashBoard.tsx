import React from 'react'

interface Props {
  text: string;
  nominal: number;
}

export const CashBoard = (props: Props) => {
  return (
    <div>
      <div>Spending this month</div>
      <h1>{props.nominal}</h1>
    </div>
  )
}
