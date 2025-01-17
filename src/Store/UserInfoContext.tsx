import React, { useReducer, ReactNode } from 'react'
import { fetchUserInfoFromLocalStorage } from '../Functions/LocalStorage'

interface Props {
  children: ReactNode
}

export interface LocationCurrency {
  locale: string;
  currency: string;
}

export const listLocation: LocationCurrency[] = [
  {
    locale: "id-ID",
    currency: "Rp"
  },
  {
    locale: "en-US",
    currency: "$"
  }
]

interface UserInfo {
  name: string;
  location: LocationCurrency;
}

interface UserInfoStore {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void
}

const userInfoStoreInitialValue: UserInfoStore = {
  userInfo: {
    name: "Guest",
    location: {
      locale: "id-ID",
      currency: "Rp"
    }
  },
  setUserInfo: () => { }
}

export const userInfoContext = React.createContext<UserInfoStore>(userInfoStoreInitialValue)

const UserInfoContext = (props: Props) => {
  const { name, locale } = fetchUserInfoFromLocalStorage()

  const userInfoDefaultValue = name && locale ? {
    name,
    location: {
      locale,
      currency: listLocation.filter((val) => val.locale === locale)[0].currency
    }
  } : userInfoStoreInitialValue.userInfo

  const [userInfo, setUserInfo] = useReducer(
    (userInfo: UserInfo, newUserInfo: UserInfo) => newUserInfo,
    userInfoDefaultValue
  )

  return (
    <userInfoContext.Provider value={
      {
        userInfo: userInfo,
        setUserInfo: setUserInfo
      }
    }>
      {props.children}
    </userInfoContext.Provider>
  )
}

export default UserInfoContext
