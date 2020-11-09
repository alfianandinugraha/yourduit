import React, { ReactNode, useReducer } from 'react'

interface ThemeContext {
  isBackdropShow: boolean;
  isActivityFormShow: boolean;
  isAddActivityFormShow: boolean;
  isUpdateActivityFormShow: boolean;
  isSidebarShow: boolean;
  setIsUpdateActivityFormShow: (value: boolean) => void;
  setIsAddActivityFormShow: (value: boolean) => void;
  setIsBackdropShow: (value: boolean) => void;
  setIsActivityFormShow: (value: boolean) => void;
  setIsSidebarShow: (value: boolean) => void;
  resetActivityFormShow: () => void;
}

export const themeContext = React.createContext<ThemeContext>({
  isActivityFormShow: false,
  isBackdropShow: false,
  isAddActivityFormShow: false,
  isUpdateActivityFormShow: false,
  isSidebarShow: false,
  setIsActivityFormShow: () => { },
  setIsBackdropShow: () => { },
  resetActivityFormShow: () => { },
  setIsAddActivityFormShow: () => { },
  setIsUpdateActivityFormShow: () => { },
  setIsSidebarShow: () => { }
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

  const [isSidebarShow, setIsSidebarShow] = useReducer(
    (state: boolean, newState: boolean) => newState, false
  )

  return (
    <themeContext.Provider value={
      {
        isActivityFormShow,
        isBackdropShow,
        isAddActivityFormShow,
        isUpdateActivityFormShow,
        isSidebarShow,
        setIsActivityFormShow,
        setIsBackdropShow,
        setIsAddActivityFormShow,
        setIsUpdateActivityFormShow,
        setIsSidebarShow,
        resetActivityFormShow: () => {
          setIsBackdropShow(false)
          setIsActivityFormShow(false)
          setIsAddActivityFormShow(false)
          setIsUpdateActivityFormShow(false)
          setIsSidebarShow(false)
        }
      }
    }>
      {children}
    </themeContext.Provider>
  )
}
