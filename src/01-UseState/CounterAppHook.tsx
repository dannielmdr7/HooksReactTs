import { useCounter } from "../hooks/useCounter"

export const CounterAppHook = () => {
  const { counter, handleCounter } = useCounter(7)
  return (
    <>
      <h1>Counter Hook: {counter} </h1>
      <hr />
      <button onClick={() => handleCounter(1)} className="btn btn-primary">+1</button>
      <button onClick={() => handleCounter(0)} className="btn btn-primary">Reset</button>
      <button onClick={() => handleCounter(-1)} className="btn btn-primary">-1</button>
    </>
  )
}
