import React, { ReactNode, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { CashSummary } from '../Components/CashSummary';
import { activityContext } from '../Store/ActivityStore'
import { SpacingLayoutTop } from '../Style/Styled';

interface Props {
  children: ReactNode;
  disableCashSummary?: boolean;
}

export const LayoutProtectedPage = (props: Props) => {
  const { getTotalNominalThisMonth } = useContext(activityContext);
  const { summary } = getTotalNominalThisMonth()

  return (
    <>
      <Container>
        <SpacingLayoutTop />
        {props.children}
        {!props.disableCashSummary ? (<CashSummary nominal={summary} />) : null}
      </Container> 
    </>
  )
}
