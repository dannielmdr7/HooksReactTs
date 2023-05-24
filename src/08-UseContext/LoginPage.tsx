import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { email, id, name, setUser } = useContext(UserContext);
  return (
    <div>
      <h1> {email} {id} {name}  </h1>
      <button onClick={() => setUser({
        id: 123,
        name: 'Daniel Montenegro',
        email: 'daniel@google.com'
      })} >Set User</button>
    </div>
  )
}
