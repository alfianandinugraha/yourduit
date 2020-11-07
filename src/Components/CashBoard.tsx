import React, { useContext } from 'react'
import { userInfoContext } from '../Store/UserInfoContext'
import { CashBoardContent, CashBoardWrapper } from '../Style/Styled'

interface Props {
  nominal: number;
  text: string;
  color: string;
}

export const CashBoard = (props: Props) => {
  const { userInfo } = useContext(userInfoContext)

  return (
    <CashBoardWrapper className={`border-${props.color}`}>
      <CashBoardContent>
        <div>{props.text}</div>
        <div className={`text-${props.color} d-flex`} style={{marginTop: '10px'}}>
          <span>{userInfo.location.currency}</span>
          <h1>{new Intl.NumberFormat(userInfo.location.locale).format(props.nominal)}</h1>
        </div>
      </CashBoardContent>
    </CashBoardWrapper>
  )
}
