import { Row, Button, Container } from 'react-bootstrap'
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

export const BaseButton = styled(Button)`
  height: 52px !important;
`

export const WhiteButton = styled(Button)`
  background-color: white;
  box-shadow: 0 3px 6px 0px rgba(00,00,00, 0.16);
`

export const GreetingDashboard = styled(Row)`
  color: white;
`

export const ListActivityDashboard = styled(Row)`
  margin-bottom: 120px;
`

export const CashBoardWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0px 3px 6px 0 rgb(00,00,00, 0.16);
  border-left: 14px solid;
`

export const CashBoardContent = styled.div`
  padding: 25px 0 25px 19px;
`

export const CashSummaryWrapper = styled.div`
  background-color: white;
  padding: .75rem 0;
  bottom: 0;
  left: 0;
  border-radius: 1rem;
  box-shadow: 0 -6px 6px 0 rgba(00,00,00, 0.16);

  h1 {
    margin-bottom: 0;
  }
`

export interface Shape {
  width?: string;
  height?: string;
}

export const Circle = styled.div<Shape>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
`

export const ActivityFormWrapper = styled.div`
  z-index: 50;
  bottom: 0;
  left: 0;
  background-color: white;
  border-radius: 20px 20px 0 0;
  height: 83%;
`

export const ActivityFormTitle = styled.h1`
  font-size: 25px;
`

export const ActivityFormButtonGroup = styled(Row)`
  margin-top: auto;
`

export const ActivityFormButton = styled(BaseButton)`
  width: 47%;
`

export const BackdropWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.55;
  z-index: 10;
`

export const SpacingLayoutTop = styled.div`
  margin-top: 79px;
`

export const TopRightElementPosition = styled(Container)`
  top: 24px;
  right: 0;
  position: absolute;
  width: 50%;
`

export const SidebarWrapper = styled(Container)`
  position: fixed;
  background: white;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  width: 80%;
`

export const SidebarHero = styled.div`
  height: 142px;
  top: 0;
  left: 0;
  width: 100%;
`

export const SidebarHeader = styled(Row)`
  margin-top: 80px;
`

export const SidebarLinkContainer = styled(Row)`
  margin-top: 2.5rem;
`