import React, { useReducer, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface UserInfo {
  name: string;
  currency: string;
}

interface UserInfoStore {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void
}

const userInfoStoreInitialValue: UserInfoStore = {
  userInfo: {
    name: "Guest",
    currency: "$"
  },
  setUserInfo: () => { }
}

export const userInfoContext = React.createContext<UserInfoStore>(userInfoStoreInitialValue)

const UserInfoContext = (props: Props) => {
  const [userInfo, setUserInfo] = useReducer(
    (userInfo: UserInfo, newUserInfo: UserInfo) => newUserInfo,
    userInfoStoreInitialValue.userInfo
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
