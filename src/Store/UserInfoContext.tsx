import React, { useReducer } from 'react'

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

const UserInfoContext = () => {
  const [userInfo, setUserInfo] = useReducer(
    (userInfo: UserInfo, newUserInfo: UserInfo) => newUserInfo,
    userInfoStoreInitialValue.userInfo
  )

  return (
    <div>
      
    </div>
  )
}

export default UserInfoContext
