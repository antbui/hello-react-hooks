import { useEffect } from 'react'

export default function useLoggerUpdate(name) {
  useEffect(() => {
    console.log(name)
  }, [name])
}
