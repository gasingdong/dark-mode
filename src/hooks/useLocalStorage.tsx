import { useState } from 'react'

export const useLocalStorage = (
  key: string,
  initialValue: boolean
): (boolean | ((value: boolean) => void))[] => {
  const [storedValue, setStoredValue] = useState((): boolean => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value: boolean): void => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}
