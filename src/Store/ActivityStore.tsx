import React, { ReactNode, useReducer } from 'react'

interface Props {
  children: ReactNode
}

export interface Activity {
  id: number;
  description: string;
  nominal: number;
  type: "0" | "1";
  createdAt: number;
  updatedAt: number;
}

export interface TotalNominalType {
  income: number;
  spending: number;
  summary: number;
}

interface ActivityContext {
  activities: Activity[];
  setActivities: (activity: Activity[]) => void;
  getTotalNominal: (from?: number, to?: number) => TotalNominalType;
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
  setActivities: () => { },
  getTotalNominal: (from: number = 0, to: number = 0): TotalNominalType => {
    return {
      income: 0,
      spending: 0,
      summary: 0
    }
  }
}

export const activityContext = React.createContext<ActivityContext>(activityStoreInitialValue)

const ActivityStore = (props: Props) => {
  const [activities, setActivities] = useReducer(
    (activities: Activity[], newActivities: Activity[]) => newActivities,
    activityStoreInitialValue.activities
  )

  const getTotalNominal = (
    from: number = activities[0].updatedAt,
    to: number = activities[activities.length - 1].updatedAt
  ): TotalNominalType => {
    let income = 0;
    let spending = 0;
    let summary = 0;

    activities
      .filter((activity) => activity.updatedAt >= from && activity.updatedAt <= to)
      .forEach((activity) => {
        switch (activity.type) {
          case "1":
            income += activity.nominal
            break
          case "0":
            spending += activity.nominal
            break
          default:
            break;
        }
    })

    summary = income - spending

    return {income, spending, summary}
  }

  return (
    <activityContext.Provider value={
      {
        activities: activities,
        setActivities: setActivities,
        getTotalNominal
      }
    }>
      {props.children}
    </activityContext.Provider>
  )
}

export default ActivityStore
