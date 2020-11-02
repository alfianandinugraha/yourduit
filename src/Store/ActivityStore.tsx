import React, { ReactNode, useReducer } from 'react'

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

const activityStoreInitialValue: ActivityContext = {
  activities: [
    {
      id: 3,
      description: "Beli Seblak",
      nominal: 200000,
      type: "0",
      createdAt: 3,
      updatedAt: 3
    },
    {
      id: 2,
      description: "Gajian",
      nominal: 1500000,
      type: "1",
      createdAt: 2,
      updatedAt: 3
    },
    {
      id: 1,
      description: "Beli kursus online",
      nominal: 500000,
      type: "0",
      createdAt: 1,
      updatedAt: 3
    },
  ],
  setActivities: () => {}
}

export const activityContext = React.createContext<ActivityContext>(activityStoreInitialValue)

const ActivityStore = (props: Props) => {
  const [activities, setActivities] = useReducer(
    (activities: Activity[], newActivities: Activity[]) => newActivities,
    activityStoreInitialValue.activities
  )

  return (
    <activityContext.Provider value={
      {
        activities: activities,
        setActivities: setActivities
      }
    }>
      {props.children}
    </activityContext.Provider>
  )
}

export default ActivityStore
