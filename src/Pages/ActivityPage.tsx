import React from 'react'
import { useParams } from 'react-router'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'

interface Props {
  
}

export const ActivityPage = (props: Props) => {
  const { id }: {id: string} = useParams()

  return (
    <LayoutProtectedPage>
    </LayoutProtectedPage>
  )
}
