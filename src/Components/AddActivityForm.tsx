import React from 'react'
import { ActivityForm } from './ActivityForm'

export const AddActivityForm = () => {
  return (
    <>
      <ActivityForm getPayload={(payload) => console.log(payload)}/>
    </>
  )
}
