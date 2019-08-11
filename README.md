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

I import useForm and make available updateValue, submitHandler, error as useForm.

```bash
# src/components/Form/index.js

const [updateValue, submitHandler, error] = useForm({});
```
