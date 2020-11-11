import { Activity } from '../Store/ActivityStore';
import {
  LOCAL_STORAGE_ACTIVITY_KEY_PREFIX,
  LOCAL_STORAGE_SEPARATOR,
  LOCAL_STORAGE_USER_KEY_PREFIX
} from '../utils/Prefix'

const LOCAL_STORAGE_USER_LOCALE_KEY = LOCAL_STORAGE_USER_KEY_PREFIX + 'locale'
const LOCAL_STORAGE_USER_NAME_KEY = LOCAL_STORAGE_USER_KEY_PREFIX + 'name'

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
  return {
    name: localStorage.getItem(LOCAL_STORAGE_USER_NAME_KEY),
    locale: localStorage.getItem(LOCAL_STORAGE_USER_LOCALE_KEY)
  }
}

export const deleteActivityFromLocalStorage = (id: number) => {
  const key = `${LOCAL_STORAGE_ACTIVITY_KEY_PREFIX}${id}`
  localStorage.removeItem(key)
}

export const saveUserToLocalStorage = (name: string, locale: string) => {
  localStorage.setItem(LOCAL_STORAGE_USER_NAME_KEY, name)
  localStorage.setItem(LOCAL_STORAGE_USER_LOCALE_KEY, locale)
}