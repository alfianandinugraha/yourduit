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
  activities: [],
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
