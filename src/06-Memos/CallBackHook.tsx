import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(7);
  const incrementFather = useCallback(
    () => {
      setCounter((value) => value + 1);
    },
    [],
  );
  return (
    <>
      <h1>Use CallBack Hook {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>

  )
}
