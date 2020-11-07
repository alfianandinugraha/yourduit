import React, { useState } from 'react'

const useDate = (timestamp: number = 0) => {
  const [date, setDate] = useState(() => {
    return new Date(timestamp || new Date().getTime())
  })

  const addZeroForUnderTen = (number: number): string => {
    return number < 10 ? `0${number}` : (number).toString()
  }

  return {
    date: date,
    getTime: date.getTime(),
    getDay: addZeroForUnderTen(date.getDate()),
    getMonth: addZeroForUnderTen(date.getMonth() + 1),
    getFullYear: date.getFullYear().toString(),
    setDate: (timestamp: number) => setDate(new Date(timestamp)),
    addZeroForUnderTen: addZeroForUnderTen
  }
}

export default useDate
