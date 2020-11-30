import React, { useState } from 'react'

function HookUseState() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  function decrementCount() {
    setCount((preCount) => preCount - 1)
    setTheme('red')
  }

  function incrementCount() {
    setCount((preCount) => preCount + 1)
    setTheme('blue')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default HookUseState
