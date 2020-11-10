import React from 'react'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { BackgroundHero } from '../Style/Styled'

export const AboutCreatorPage = () => {
  return (
    <>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="232px" />
      <LayoutProtectedPage disableCashSummary={true}>
      </LayoutProtectedPage>
    </>
  )
}
