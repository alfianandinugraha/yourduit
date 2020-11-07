import React, { ReactNode, useReducer } from 'react'

interface ThemeContext {
  isBackdropShow: boolean;
  isActivityFormShow: boolean;
  isAddActivityFormShow: boolean;
  isUpdateActivityFormShow: boolean;
  setIsUpdateActivityFormShow: (value: boolean) => void;
  setIsAddActivityFormShow: (value: boolean) => void;
  setIsBackdropShow: (value: boolean) => void;
  setIsActivityFormShow: (value: boolean) => void;
  resetActivityFormShow: () => void;
}

export const themeContext = React.createContext<ThemeContext>({
  isActivityFormShow: false,
  isBackdropShow: false,
  isAddActivityFormShow: false,
  isUpdateActivityFormShow: false,
  setIsActivityFormShow: () => { },
  setIsBackdropShow: () => { },
  resetActivityFormShow: () => { },
  setIsAddActivityFormShow: () => { },
  setIsUpdateActivityFormShow: () => { }
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

  const [isUpdateActivityFormShow, setIsUpdateActivityFormShow] = useReducer(
    (state: boolean, newState: boolean) => newState, false
  )

  return (
    <themeContext.Provider value={
      {
        isActivityFormShow,
        isBackdropShow,
        isAddActivityFormShow,
        isUpdateActivityFormShow,
        setIsActivityFormShow,
        setIsBackdropShow,
        setIsAddActivityFormShow,
        setIsUpdateActivityFormShow,
        resetActivityFormShow: () => {
          setIsBackdropShow(false)
          setIsActivityFormShow(false)
          setIsAddActivityFormShow(false)
          setIsUpdateActivityFormShow(false)
        }
      }
    }>
      {children}
    </themeContext.Provider>
  )
}
