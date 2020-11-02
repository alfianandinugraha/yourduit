import React from 'react'

interface Props {
  nominal: number;
  text: string;
  color: string;
  currency: string;
}

export const CashBoard = (props: Props) => {
  return (
    <div style={
      {
        backgroundColor: "white",
        borderRadius: "5px",
        marginBottom: "1rem",
        boxShadow: "0px 3px 6px 0 rgb(00,00,00, 0.16)",
        borderLeft: `14px solid`
      }
    } className={`border-${props.color}`}>
      <div style={
        {
          padding: "25px 0 25px 19px"
        }
      }>
        <div>{props.text}</div>
        <div className={`text-${props.color} d-flex`} style={{marginTop: '10px'}}>
          <span>{props.currency}</span>
          <h1>{new Intl.NumberFormat('id-ID').format(props.nominal)}</h1>
        </div>
      </div>
    </div>
  )
}
