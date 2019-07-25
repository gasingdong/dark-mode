import React, { useState } from 'react'

function useLocalStorage(
  key: string,
  initialValue: string
): (string | ((value: string) => void))[] {
  const [storedValue, setStoredValue] = useState((): string => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value: string): void => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}
