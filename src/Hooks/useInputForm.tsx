import React, { useState } from 'react'

const useInputForm = (): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>("")

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return [value, updateValue]
}

export default useInputForm
