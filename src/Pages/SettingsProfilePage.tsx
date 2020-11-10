import React from 'react'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { BackgroundHero } from '../Style/Styled'

export const SettingsProfilePage = () => {
  return (
    <>
      <BackgroundHero className="bg-primary w-100 position-absolute" height="402px"/>
      <LayoutProtectedPage disableCashSummary={true}>
        <h1 className="text-white">Settings</h1>
      </LayoutProtectedPage>
    </>
  )
}
