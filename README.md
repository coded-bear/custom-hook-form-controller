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
# src/containers/App/useForm.js

const useForm = initial => {
    const [values, setValues] = useState(initial);
    const [error, setError] = useState(null);
}
```

<p>The updateValue function adds further elements to the value object.</p>

```bash
# src/containers/App/useForm.js

const useForm = initial => {
    const [values, setValues] = useState(initial);
    const [error, setError] = useState(null);

    const updateValue = e => {
        setValues({ ...values, [e.target.name]: e.target.value }); # result: { inputName: value }
    };
}
```

<p>Create a "validate" function that validates the data and returns errors or null.</p>

```bash
# src/containers/App/useForm.js

const useForm = initial => {
    const [values, setValues] = useState(initial);
    const [error, setError] = useState(null);

    const updateValue = e => {
        setValues({ ...values, [e.target.name]: e.target.value }); # result: { inputName: value }
    };

    const validate = values => {
        if (!values.name) return "Enter your name";
        if (!values.email) return "Enter your email";
        if (!values.password) return "Enter your password";

        return null;
    };
}
```

<p>Create submitHandler, which is a function that sets the state of the error hook or sends a form</p>

```bash
# src/containers/App/useForm.js

const useForm = initial => {
    const [values, setValues] = useState(initial);
    const [error, setError] = useState(null);

    const updateValue = e => {
        setValues({ ...values, [e.target.name]: e.target.value }); # result: { inputName: value }
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

        # here you can send your "values"
        console.log(values);
        }
    };
}
```

<p>We need to return values in order to be able to use them in the form.</p>

```bash
# src/containers/App/useForm.js

const useForm = initial => {
    const [values, setValues] = useState(initial);
    const [error, setError] = useState(null);

    const updateValue = e => {
        setValues({ ...values, [e.target.name]: e.target.value }); # result: { inputName: value }
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

        # here you can send your "values"
        console.log(values);
        }
    };

    return [updateValue, submitHandler, error];
}
```

<p>Import useForm and share data (updateValue, submitHandler, error) with useForm.</p>
<p>updateValue => value from input onChange</p>
<p>submitHandler => form handler</p>
<p>error => form errors</p>

```bash
# src/containers/App/App.js

const [updateValue, submitHandler, error] = useForm({});
```

<p>Using custom hooks allows us to write a nicer form handling, and you can easily move it to a separate file.</p>
