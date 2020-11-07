import React, { ReactNode, useReducer } from 'react'

interface ThemeContext {
  isBackdropShow: boolean;
  isActivityFormShow: boolean;
  isAddActivityFormShow: boolean;
  setIsAddActivityFormShow: (value: boolean) => void;
  setIsBackdropShow: (value: boolean) => void;
  setIsActivityFormShow: (value: boolean) => void;
  resetActivityFormShow: () => void;
}

export const themeContext = React.createContext<ThemeContext>({
  isActivityFormShow: false,
  isBackdropShow: false,
  isAddActivityFormShow: false,
  setIsActivityFormShow: () => { },
  setIsBackdropShow: () => { },
  resetActivityFormShow: () => { },
  setIsAddActivityFormShow: () => { }
})

export const ThemeStore = ({children} : {children: ReactNode}) => {
  const [isActivityFormShow, setIsActivityFormShow] = useReducer(
    (state: boolean, newState: boolean) => newState, false
  )

  const [isBackdropShow, setIsBackdropShow] = useReducer(
    (state: boolean, newState: boolean) => newState, false
  )

  const [isAddActivityFormShow, setIsAddActivityFormShow] = useReducer(
    (state: boolean, newState: boolean) => newState, false
  )

  return (
    <themeContext.Provider value={
      {
        isActivityFormShow,
        isBackdropShow,
        isAddActivityFormShow,
        setIsActivityFormShow,
        setIsBackdropShow,
        setIsAddActivityFormShow,
        resetActivityFormShow: () => {
          setIsBackdropShow(false)
          setIsActivityFormShow(false)
          setIsAddActivityFormShow(false)
        }
      }
    }>
      {children}
    </themeContext.Provider>
  )
}
