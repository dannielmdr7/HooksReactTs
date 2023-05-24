import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Daniel',
    email: 'danniel@google.com'
  });

  const { username, email } = formState;
  const onInputChange = (target: EventTarget & HTMLInputElement) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  };
  useEffect(() => {
    // console.log('UsseEffect llamado');
  }, []);
  useEffect(() => {
    // console.log('formState cambio');
  }, [formState]);
  useEffect(() => {
    // console.log('Email cambio');
  }, [email]);


  return (
    <>
      <h1>Simple Form</h1>
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
      {
        (username === 'Daniel2') && <Message />
      }
    </>
  )
}
