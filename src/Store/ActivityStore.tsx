import React, { ReactNode, useReducer } from 'react'
import { deleteActivityFromLocalStorage, fetchAllActivityFromLocalStorage, saveActivityToLocalStorage } from '../Functions/LocalStorage'

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

const defaultActivity: Activity = {
  id: 0,
  description: "",
  nominal: 0,
  type: "0",
  createdAt: 0,
  updatedAt: 0
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
  getTotalNominalThisMonth: () => TotalNominalType;
  addActivity: (activity: Activity) => void;
  getActivityById: (id: number) => Activity;
  deleteActivity: (id: number) => void;
  updateActivity: (id: number, activity: Activity) => void;
  getAllActivitiesByDate: (from: number, to: number) => Activity[]
}

const activityStoreInitialValue: ActivityContext = {
  activities: [
    {
      id: 3,
      description: "Beli Seblak",
      nominal: 200000,
      type: "0",
      createdAt: 3,
      updatedAt: 1604250000000
    },
    {
      id: 2,
      description: "Gajian",
      nominal: 1500000,
      type: "1",
      createdAt: 2,
      updatedAt: 1604163600000
    },
    {
      id: 1,
      description: "Beli kursus online",
      nominal: 500000,
      type: "0",
      createdAt: 1,
      updatedAt: 1603558800000
    },
  ],
  setActivities: () => { },
  getTotalNominal: (from: number = 0, to: number = 0): TotalNominalType => {
    return {
      income: 0,
      spending: 0,
      summary: 0
    }
  },
  getTotalNominalThisMonth: (from: number = 0, to: number = 0): TotalNominalType => {
    return {
      income: 0,
      spending: 0,
      summary: 0
    }
  },
  addActivity: () => { },
  getActivityById: () => defaultActivity,
  deleteActivity: () => { },
  updateActivity: () => { },
  getAllActivitiesByDate: () => []
}

export const activityContext = React.createContext<ActivityContext>(activityStoreInitialValue)

const ActivityStore = (props: Props) => {
  const [activities, setActivities] = useReducer(
    (activities: Activity[], newActivities: Activity[]) => newActivities,
    fetchAllActivityFromLocalStorage()
  )

  const getTotalNominal = (
    from: number = activities[activities.length - 1].updatedAt,
    to: number = activities[0].updatedAt
  ): TotalNominalType => {
    let income = 0;
    let spending = 0;
    let summary = 0;

    activities
      .filter((activity) => activity.updatedAt >= from && activity.updatedAt <= to + 86400000 - 1)
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

  const getTotalNominalThisMonth = (): TotalNominalType => {
    const thisTime = {
      days: 1,
      months: new Date().getMonth(),
      years: new Date().getFullYear()
    }
  
    const millisecondFromFirstDate = new Date(thisTime.years, thisTime.months, thisTime.days).getTime();
    const millisecondFromNow = new Date().getTime()

    const totalNominal = getTotalNominal(millisecondFromFirstDate, millisecondFromNow)

    return totalNominal
  }

  const addActivity = (activity: Activity) => {
    setActivities([activity, ...activities])
  }

  const getActivityById = (id: number) => {
    return activities.filter((activity) => activity.id === id)[0]
  }

  const getAllActivitiesByDate = (from: number, to: number) => {
    const newActivities = [...activities].filter((activity) => activity.updatedAt >= from && activity.updatedAt <= to + 86400000 - 1)
    return newActivities
  }

  const deleteActivity = (id: number) => {
    const index = activities.findIndex((activity) => activity.id === id)
    const newActivity = [...activities]
    newActivity.splice(index, 1)
    
    setActivities(newActivity)
    deleteActivityFromLocalStorage(id)
  }

  const updateActivity = (id: number, activity: Activity) => {
    const index = activities.findIndex((activity) => activity.id === id)
    const newActivity = [...activities]
    newActivity.splice(index, 1, activity)

    console.log(newActivity)

    setActivities(newActivity)
    saveActivityToLocalStorage(activity)
  }

  return (
    <activityContext.Provider value={
      {
        activities: activities,
        setActivities: setActivities,
        getTotalNominal,
        getTotalNominalThisMonth,
        addActivity,
        getActivityById,
        deleteActivity,
        updateActivity,
        getAllActivitiesByDate
      }
    }>
      {props.children}
    </activityContext.Provider>
  )
}

export default ActivityStore
