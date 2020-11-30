import React from 'react'
// import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponenent from './FunctionContextComponenent'
import ThemeProvider from './ThemeContext'

function HookUseContext() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponenent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  )
}

export default HookUseContext
