import { useState } from "react"

export const useCounter = (initValue: number) => {
  const [counter, setCounter] = useState(initValue);
  const handleCounter = (value: number) => {
    if (value !== 0) {
      setCounter(counter + value);
    } else {
      setCounter(initValue)
    }
  }

  return {
    counter,
    handleCounter
  }
}