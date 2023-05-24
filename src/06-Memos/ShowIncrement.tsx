
interface Props {
  increment: () => void
}
export const ShowIncrement = ({ increment }: Props) => {
  console.log('Me volví a generar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={() => increment()}
    >Incrementar</button>
  )
}
