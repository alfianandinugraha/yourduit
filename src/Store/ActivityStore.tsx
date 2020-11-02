import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface Activity {
  id: number;
  description: string;
  nominal: number;
  type: "0" | "1";
  createdAt: number;
  updatedAt: number;
}

interface ActivityContext {
  activities: Activity[];
  setActivities: (activity: Activity[]) => void
}

const ActivityStore = (props: Props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ActivityStore
