import React from "react";
import useForm from "./useForm";

const Input = ({ type, name, change, placeholder }) => (
  <label>
    <input
      type={type}
      name={name}
      onChange={change}
      placeholder={placeholder}
    />
  </label>
);

const App = () => {
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

      <button>Confirm</button>
    </form>
  );
};

export default App;
