import React from 'react'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'

export const AboutCreatorPage = () => {
  return (
    <>
      <LayoutProtectedPage disableCashSummary={true}>
        <h1>Hello !</h1>
      </LayoutProtectedPage>
    </>
  )
}
