import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ActivityStore = (props: Props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ActivityStore
