import React, { ReactElement } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = (): ReactElement => {
  const [darkMode, setDarkMode] = useDarkMode()
  const toggleMode = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  )
}

export default Navbar
