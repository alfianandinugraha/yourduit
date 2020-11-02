import React, { useReducer } from 'react'

interface UserInfo {
  name: string;
  currency: string;
}

interface UserInfoStore {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void
}

export const userInfoContext = React.createContext<UserInfoStore>({
  userInfo: {
    name: "Guest",
    currency: "$"
  },
  setUserInfo: () => {}
})

const UserInfoContext = () => {
  const [userInfo, setUserInfo] = useReducer(
    (userInfo: UserInfo, newUserInfo: UserInfo) => newUserInfo, {
      name: "Guest",
      currency: "$"
    })

  return (
    <div>
      
    </div>
  )
}

export default UserInfoContext
