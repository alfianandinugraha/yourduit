import { Activity } from '../Store/ActivityStore';
import { LOCAL_STORAGE_PREFIX, LOCAL_STORAGE_ACTIVITY_SEPARATOR } from '../utils/Prefix'

export const saveActivityToLocalStorage = (activity: Activity) => {
  const separator = LOCAL_STORAGE_ACTIVITY_SEPARATOR;

  localStorage.setItem(
    `${LOCAL_STORAGE_PREFIX}${separator}activity${separator}${activity.id}`,
    `${activity.id}${separator}${activity.description}${separator}${activity.nominal}${separator}${activity.type}${separator}${activity.createdAt}${separator}${activity.updatedAt}`
  )
}

export const fetchAllActivityFromLocalStorage = () => {
  const keyActivity = LOCAL_STORAGE_PREFIX + LOCAL_STORAGE_ACTIVITY_SEPARATOR + 'activity';
  const activities: Activity[] = []

  for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index)
    
    if (element?.startsWith(keyActivity)) {
      const [id, description, nominal, type, createdAt, updatedAt] = localStorage.getItem(element)?.split(LOCAL_STORAGE_ACTIVITY_SEPARATOR) as string[]

      let typeResult: "1" | "0" = type === "1" ? "1" : "0" 

      const activity: Activity = {
        id: +id,
        description,
        nominal: +nominal,
        type: typeResult,
        createdAt: +createdAt,
        updatedAt: +updatedAt
      }

      activities.push(activity)
    }
  }

  return activities
}

export const fetchUserInfoFromLocalStorage = () => {
  const keyUser = LOCAL_STORAGE_PREFIX + LOCAL_STORAGE_ACTIVITY_SEPARATOR + 'user';
  const result: any = {}

  for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index);
    if (element?.startsWith(keyUser)) { 
      if (element === keyUser + LOCAL_STORAGE_ACTIVITY_SEPARATOR + "name") {
        result.name = localStorage.getItem(element)
      } else if (element === keyUser + LOCAL_STORAGE_ACTIVITY_SEPARATOR + "locale") {
        result.locale = localStorage.getItem(element)
      }
    }
  }

  return result
}