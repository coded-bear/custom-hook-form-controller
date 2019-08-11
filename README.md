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

## Usage

I import useForm and make available data (updateValue, submitHandler, error) as useForm.
updateValue => value from input onChange
submitHandler => form handler
error => form errors

```bash
# src/components/Form/index.js

const [updateValue, submitHandler, error] = useForm({});
```
