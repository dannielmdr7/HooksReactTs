import { useLayoutEffect, useRef, useState } from "react"


interface Props {
  name: string,
  experience: number,
  move: string
}
export const InfoPokemon = ({ name, experience, move }: Props) => {
  const pRef = useRef<HTMLInputElement>(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
  useLayoutEffect(() => {
    const { width, height } = pRef.current?.getBoundingClientRect() || { width: 0, height: 0 };
    setBoxSize({ width, height })
  }, [])
  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
        <p
          className="mb-1"
          ref={pRef}
        > {move} </p>
        <footer className="blockquote-footer" > {name} - {experience}  </footer>
      </blockquote>

      <code> {JSON.stringify(boxSize)} </code>
    </>
  )
}
