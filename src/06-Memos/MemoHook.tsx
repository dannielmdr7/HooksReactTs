import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterations = 100) => {
  for (let index = 0; index <= iterations; index++) {
    console.log('Ahí vamos...');
  }
  return ` ${iterations} realizadas `

}

export const MemoHook = () => {
  const { counter, handleCounter } = useCounter(4000 );
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
      <h1> Counter: <small> {counter} </small> </h1>
      <hr />
      <h4> {memorizedValue} </h4>
      <button
        className="btn btn-primary mt-2 "
        onClick={() => handleCounter(1)}
      >+1</button>

      <button
        className="btn btn-outline-primary mt-2 "
        onClick={() => setShow(!show)}
      > Show/Hide {JSON.stringify(show)} </button>

    </>
  )
}
