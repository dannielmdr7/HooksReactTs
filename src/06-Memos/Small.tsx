import { memo } from "react";

interface Props {
  counter: number;
}
export const Small = memo(({ counter }: Props) => {
  console.log('Me volví a dibujar :(');

  return (
    <small> {counter} </small>
  )
})
