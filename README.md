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

<p>I import useForm and make available data (updateValue, submitHandler, error) as useForm.</p>
<p>updateValue => value from input onChange</p>
<p>submitHandler => form handler</p>
<p>error => form errors</p>

```bash
# src/components/Form/index.js

const [updateValue, submitHandler, error] = useForm({});
```
