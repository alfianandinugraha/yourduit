import React, { ReactNode } from 'react'

interface Props {
  nominal: number;
  children: ReactNode;
}

export const CashBoard = (props: Props) => {
  return (
    <div style={
      {
        backgroundColor: "white",
        borderRadius: "5px",
        marginBottom: "1rem",
        boxShadow: "0px 3px 6px 0 rgb(00,00,00, 0.16)"
      }
    }>
      <div style={
        {
          padding: "25px 0 25px 19px"
        }
      }>
        {props.children}
        <h1>{props.nominal}</h1>
      </div>
    </div>
  )
}
