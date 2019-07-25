import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (): (boolean | ((value: boolean) => void))[] => {
  const [value, setValue] = useLocalStorage('darkMode', false)

  useEffect((): void => {
    const body: HTMLBodyElement | null = document.querySelector('body')

    if (!body) {
      return
    }
    value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  }, [value])

  return [value, setValue]
}
