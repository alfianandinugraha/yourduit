import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { LayoutProtectedPage } from '../Layout/LayoutProtectedPage'
import { activityContext } from '../Store/ActivityStore'

export const ActivityPage = () => {
  const { id }: { id: string } = useParams()
  const { getActivityById } = useContext(activityContext)
  const [activity] = useState(getActivityById(+id))

  return (
    <LayoutProtectedPage>
    </LayoutProtectedPage>
  )
}
