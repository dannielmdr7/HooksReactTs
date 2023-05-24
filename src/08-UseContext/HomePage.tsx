import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { email, id, name } = useContext(UserContext);
  return (
    <div>
      <hr />
      <h1> {email} {id} {name}  </h1>

    </div>

  )
}
