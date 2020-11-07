import React, { ReactNode, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { AddActivityForm } from '../Components/AddActivityForm';
import { CashSummary } from '../Components/CashSummary';
import { activityContext } from '../Store/ActivityStore'
import { SpacingLayoutTop } from '../Style/Styled';

interface Props {
  children: ReactNode
}

export const LayoutProtectedPage = (props: Props) => {
  const { getTotalNominalThisMonth } = useContext(activityContext);
  const { summary } = getTotalNominalThisMonth()

  return (
    <>
      <Container>
        <SpacingLayoutTop />
        {props.children}
        <CashSummary nominal={summary} />
        <AddActivityForm />
      </Container> 
    </>
  )
}
