import { useEffect, useState } from "react"
import { APIResponse } from "../03-example/Api.interface"
interface State {
  data: { name: string, experience: number, move: string };
  isLoading: boolean;
  hasError: string;
}
export const useFetch = (url: string) => {
  const [state, setState] = useState<State>({
    hasError: '',
    isLoading: true,
    data: {
      move: '',
      experience: 0,
      name: ''
    }
  })
  const getFetch = async () => {
    try {
      setState({ ...state, isLoading: true })
      const res = await fetch(url);
      const data: APIResponse = await res.json();
      const pokemon = {
        name: data.name,
        experience: data.base_experience,
        move: data.moves[0].move.name
      }
      setState({
        data: pokemon,
        isLoading: false,
        hasError: ''
      })
    } catch (error) {
      console.log(error);
    }


  }
  useEffect(() => {
    getFetch()
  }, [url])
  return {
    ...state

  }
}
