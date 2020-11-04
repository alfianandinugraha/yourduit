import React, { ReactNode, useReducer } from 'react'

interface ThemeContext {
  isBackdropShow: boolean;
  isActivityFormShow: boolean;
  setIsBackdropShow: (value: boolean) => void;
  setIsActivityFormShow: (value: boolean) => void;
}

export const themeContext = React.createContext<ThemeContext>({
  isActivityFormShow: false,
  isBackdropShow: false,
  setIsActivityFormShow: () => { },
  setIsBackdropShow: () => { }
})

export const ThemeStore = ({children} : {children: ReactNode}) => {
  const [isActivityFormShow, setIsActivityFormShow] = useReducer(
    (state: boolean, newState: boolean) => newState, false
  )

  const [isBackdropShow, setIsBackdropShow] = useReducer(
    (state: boolean, newState: boolean) => newState, false
  )

  return (
    <themeContext.Provider value={
      {
        isActivityFormShow,
        isBackdropShow,
        setIsActivityFormShow,
        setIsBackdropShow
      }
    }>
      {children}
    </themeContext.Provider>
  )
}
