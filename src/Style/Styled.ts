import { Row } from 'react-bootstrap'
import styled from 'styled-components'

interface BackgroundHeroProps {
  height: string;
}

export const BackgroundHero = styled.div<BackgroundHeroProps>`
  height: ${props => props.height};
  top: 0;
  left: 0;
  border-radius: 0 0 20px 20px;
  z-index: -1;
`

export const GreetingDashboard = styled(Row)`
  margin-top: 79px;
  color: white;
`

export const CashBoardWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0px 3px 6px 0 rgb(00,00,00, 0.16);
  border-left: 14px solid;
`