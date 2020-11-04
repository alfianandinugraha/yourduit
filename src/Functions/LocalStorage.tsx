import { Activity } from '../Store/ActivityStore';
import { LOCAL_STORAGE_PREFIX, LOCAL_STORAGE_ACTIVITY_SEPARATOR } from '../utils/Prefix'

export const saveActivityToLocalStorage = (activity: Activity) => {
  const separator = LOCAL_STORAGE_ACTIVITY_SEPARATOR;

  localStorage.setItem(
    `${LOCAL_STORAGE_PREFIX}${separator}activity${separator}${activity.id}`,
    `${activity.id}${separator}${activity.description}${separator}${activity.nominal}${separator}${activity.type}${separator}${activity.createdAt}${separator}${activity.updatedAt}`
  )
}