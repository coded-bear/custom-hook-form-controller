import { useState } from "react";

const useForm = initial => {
  const [values, setValues] = useState(initial);
  const [error, setError] = useState(null);

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = values => {
    if (!values.name) return "Enter your name";
    if (!values.email) return "Enter your email";
    if (!values.password) return "Enter your password";

    return null;
  };

  const submitHandler = async e => {
    e.preventDefault();

    if (validate(values)) setError(validate(values));
    else {
      setError(null);

      //   here you can send your "values"
      console.log(values);
    }
  };

  return [updateValue, submitHandler, error];
};

export default useForm;
