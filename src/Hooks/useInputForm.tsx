import { useState } from 'react'

const useInputForm = (): [string, (e: any) => void] => {
  const [value, setValue] = useState<string>("")

  const updateValue = (e: any) => setValue(e.target.value)

  return [value, updateValue]
}

export default useInputForm
