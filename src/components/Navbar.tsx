import React, { useState, ReactElement } from 'react'

const Navbar = (): ReactElement => {
  const [darkMode, setDarkMode] = useState(false)
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
