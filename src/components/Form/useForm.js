import { useState } from "react";

const useForm = initial => {
  const [values, setValues] = useState(initial);
  const [error, setError] = useState("");

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = values => {};

  const submitHandler = async e => {
    e.preventDefault();

    if (validate(values)) setError(validate(values));
    else console.log(values);
  };

  return [updateValue, submitHandler, error];
};

export default useForm;
