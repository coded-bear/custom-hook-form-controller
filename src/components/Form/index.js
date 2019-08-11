import React from "react";
import { Input, Button } from "./elements";
import useForm from "./useForm";

const Form = () => {
  const [updateValue, submitHandler, error] = useForm({});

  return (
    <form onSubmit={submitHandler}>
      <Input type="text" name="name" change={updateValue} placeholder="Name" />
      <Input
        type="email"
        name="email"
        change={updateValue}
        placeholder="Email"
      />
      <Input
        type="password"
        name="password"
        change={updateValue}
        placeholder="Password"
      />

      {error && <p>{error}</p>}

      <Button text="Confirm" />
    </form>
  );
};

export default Form;
