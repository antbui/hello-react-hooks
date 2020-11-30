import './App.css'
import HookUseContext from './components/HookUseContext'
import HookUseEffect from './components/HookUseEffect'
import HookUseMemo from './components/HookUseMemo'
import HookUseReducer from './components/HookUseReducer'
import HookUseState from './components/HookUseState'

function App() {
  return (
    <>
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo /> */}
      <HookUseContext />
      <HookUseReducer />
    </>
  )
}

export default App
