import { ReactElement, useState } from 'react'
import { UserContext, UserContextInterface } from './UserContext'
interface Props {
  children: ReactElement[]
}


export const UserProvider = ({ children }: Props) => {
  const [provider, setProvider] = useState({
    id: 0,
    name: '',
    email: ''
  });
  const state:UserContextInterface = {
    ...provider,
    setUser: setProvider
  }
  return (
    <UserContext.Provider value={state} >
      {children}
    </UserContext.Provider>
  )
}
