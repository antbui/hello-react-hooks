import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

function FunctionContextComponenent() {
  const darkTheme = useTheme()
  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
  }

  const toggleTheme = useThemeUpdate()

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Function Theme</div>
    </>
  )
}

export default FunctionContextComponenent
