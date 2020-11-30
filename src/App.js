import './App.css'
import HookCustomHook from './components/HookCustomHook'
import HookUseContext from './components/HookUseContext'
import HookUseEffect from './components/HookUseEffect'
import HookUseMemo from './components/HookUseMemo'
import HookUseReducer from './components/HookUseReducer'
import HookUseState from './components/HookUseState'

function App() {
  return (
    <>
      <HookCustomHook />
      <HookUseReducer />
      <HookUseContext />
      <HookUseMemo />
      <HookUseEffect />
      <HookUseState />
    </>
  )
}

export default App
