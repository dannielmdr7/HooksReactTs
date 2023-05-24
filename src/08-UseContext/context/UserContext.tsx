import { Dispatch, SetStateAction, createContext } from 'react';
export interface UserContextInterface {
  id: number;
  name: string;
  email: string,
  setUser: Dispatch<SetStateAction<{ id: number; name: string; email: string; }>>
}
const f = () => {}
export const UserContext = createContext<UserContextInterface>({ email: '', id: 0, name: '', setUser: f })