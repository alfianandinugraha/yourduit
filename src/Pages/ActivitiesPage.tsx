import React from 'react'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { BackgroundHero } from '../Style/Styled'

export const ActivitiesPage = () => {
  return (
    <LayoutProtectedPage>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="311px"/>
    </LayoutProtectedPage>
  )
}
