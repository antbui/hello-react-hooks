import React from 'react'
import useLocalStorage from './useLocalStorage'
import useLoggerUpdate from './useLoggerUpdate'

function HookCustomHook() {
  const [value, setValue] = useLocalStorage('name', () => '')
  useLoggerUpdate(value)
  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <span>{value}</span>
    </>
  )
}

export default HookCustomHook
