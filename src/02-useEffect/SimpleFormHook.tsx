import { useForm } from "../hooks/useForm";

export const SimpleFormHook = () => {
  const { onInputChange, username, email, password, onResetForm } = useForm({ username: '', email: '', password: '' });

  return (
    <>
      <h1>Simple Form Hook</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name='username'
        value={username}
        onChange={(event) => onInputChange(event.target)}
      />
      <input
        className="form-control my-2"
        type="email"
        placeholder="danniel@gmail.com"
        name='email'
        value={email}
        onChange={(event) => onInputChange(event.target)}
      />
      <input
        className="form-control "
        type="password"
        placeholder="contraseña"
        name='password'
        value={password}
        onChange={(event) => onInputChange(event.target)}
      />
      <button onClick={onResetForm} className="btn btn-primary">Borrar</button>
    </>
  )
}
