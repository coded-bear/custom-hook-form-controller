# custom-hook-form-controller

Form controller written in React, using custom hook.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start

# build
$ npm run build
```

## Explication

<p>useForm has two hooks, values and form errors.</p>
```bash
# src/components/Form/useForm.js

const useForm = initial => {
const [values, setValues] = useState(initial);
const [error, setError] = useState(null);
};

````

<p>The updateValue function adds further elements to the value object.</p>
```bash

const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
};

# result:
# { inputName: value }
```

<p>validate function validating data and return errors or null</p>
```bash
const validate = values => {
    if (!values.name) return "Enter your name";
    if (!values.email) return "Enter your email";
    if (!values.password) return "Enter your password";

    return null;
};
```

<p>submitHandler is a function that sets the state of the error hook or sends a form.</p>
```bash
const submitHandler = async e => {
    e.preventDefault();

    if (validate(values)) setError(validate(values));
    else {
      setError(null);

      //   here you can send your "values"
      console.log(values);
    }
};
```

<p>we need to return values in order to be able to use them in the form</p>
```bash
return [updateValue, submitHandler, error];
```

<p>Import useForm and make the data (updateValue, submitHandler, error) available as useForm.</p>
<p>updateValue => value from input onChange</p>
<p>submitHandler => form handler</p>
<p>error => form errors</p>

```bash
# src/components/Form/index.js

const [updateValue, submitHandler, error] = useForm({});
````
