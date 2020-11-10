import React from 'react'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'

export const SettingsProfilePage = () => {
  return (
    <>
      <LayoutProtectedPage disableCashSummary={true}>
        <h1>Settings</h1>
      </LayoutProtectedPage>
    </>
  )
}
