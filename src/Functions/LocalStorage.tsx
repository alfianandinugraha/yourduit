import { Activity } from '../Store/ActivityStore';
import { LOCAL_STORAGE_ACTIVITY_KEY_PREFIX, LOCAL_STORAGE_PREFIX, LOCAL_STORAGE_SEPARATOR } from '../utils/Prefix'

export const saveActivityToLocalStorage = (activity: Activity) => {
  const separator = LOCAL_STORAGE_SEPARATOR;

  localStorage.setItem(
    `${LOCAL_STORAGE_ACTIVITY_KEY_PREFIX}${activity.id}`,
    `${activity.id}${separator}${activity.description}${separator}${activity.nominal}${separator}${activity.type}${separator}${activity.createdAt}${separator}${activity.updatedAt}`
  )
}

export const fetchAllActivityFromLocalStorage = () => {
  const keyActivity = LOCAL_STORAGE_ACTIVITY_KEY_PREFIX;
  const activities: Activity[] = []

  for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index)
    
    if (element?.startsWith(keyActivity)) {
      const [id, description, nominal, type, createdAt, updatedAt] = localStorage.getItem(element)?.split(LOCAL_STORAGE_SEPARATOR) as string[]

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
  activities.sort((a, b) => b.updatedAt - a.updatedAt)

  return activities
}

export const fetchUserInfoFromLocalStorage = () => {
  const keyUser = LOCAL_STORAGE_PREFIX + LOCAL_STORAGE_SEPARATOR + 'user';
  const result: any = {}

  for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index);
    if (element?.startsWith(keyUser)) { 
      if (element === keyUser + LOCAL_STORAGE_SEPARATOR + "name") {
        result.name = localStorage.getItem(element)
      } else if (element === keyUser + LOCAL_STORAGE_SEPARATOR + "locale") {
        result.locale = localStorage.getItem(element)
      }
    }
  }

  return result
}

export const deleteActivityFromLocalStorage = (id: number) => {
  const separator = LOCAL_STORAGE_SEPARATOR
  const prefix = LOCAL_STORAGE_PREFIX 
  const key = `${prefix}${separator}activity${separator}${id}`
  localStorage.removeItem(key)
}

export const saveUserToLocalStorage = (name: string, locale: string) => {
  const separator = LOCAL_STORAGE_SEPARATOR;

  localStorage.setItem(
    `${LOCAL_STORAGE_PREFIX}${separator}user${separator}name`,
    name
  )
  localStorage.setItem(
    `${LOCAL_STORAGE_PREFIX}${separator}user${separator}locale`,
    locale
  )
}