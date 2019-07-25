import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
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
      <Link to="/">
        <h1>Crypto Tracker</h1>
      </Link>
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
