import { useCounter, useFetch } from '../hooks';
import { InfoPokemon, Loading } from './';

export const MultipleCustomHook = () => {
  const { counter, handleCounter } = useCounter(1)
  // const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${counter}`)
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  const { name, move, experience } = data;
  // useEffect(() => {
  //   setUrl(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  // }, [counter])
  return (
    <>
      <h1>PokeApi</h1>
      <hr />
      {
        isLoading
          ? (
            <Loading />
          )
          : (
            <InfoPokemon
              experience={experience}
              move={move}
              name={name}
            />
          )
      }
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => handleCounter(1)}
      >Next Pokemon</button>

    </>
  )
}
