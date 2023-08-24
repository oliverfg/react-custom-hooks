# Custom React Hooks Collection

The Custom React Hooks Collection is a curated set of reusable custom hooks for React applications. These hooks are designed to simplify common tasks and logic in your React projects, promoting code reusability and maintainability.

## Table of Contents

- [Hooks Collection](#custom-react-hooks-collection)
  - [Installation](#installation)
  - [Hooks Included](#hooks-included)
    - [useCounter](#usecounter)
    - [useFetch](#usefetch)
    - [useForm](#useform)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To use the Custom React Hooks Collection in your project, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/oliverfg/react-custom-hooks.git
```

2. Navigate to the project directory:

```bash
cd react-custom-hooks
```

3. Install the dependencies:

```bash
npm install
```

4. Build the project:

```bash
npm run build
```

5. You can now import the hooks from the built package in your projects:

```javascript
import { useCounter, useFetch, useForm } from './path-to-react-custom-hooks';
```

## Hooks Included

### `useCounter`

The `useCounter` hook provides a simple way to manage counting functionality in your components. It exposes methods to increment, decrement, and reset the count value.

```javascript
const { count, increment, decrement, reset } = useCounter(initialValue);
```

### `useFetch`

The `useFetch` hook allows you to easily make HTTP GET requests within your components. It provides the fetched data, loading, and error states.

```javascript
const { data, loading, error, fetchData } = useFetch(url);
```

### `useForm`

The `useForm` hook assists in handling form state and validation in a streamlined manner. It tracks input values, their changes, and validation status.

```javascript
const { values, handleChange, handleSubmit, errors } = useForm(initialValues, validate);
```

## Usage

Below are some examples of how to use the provided hooks:

### `useCounter`

```javascript
import { useCounter } from './path-to-react-custom-hooks';

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### `useFetch`

```javascript
import { useFetch } from './path-to-react-custom-hooks';

function FetchComponent() {
  const { data, loading, error, fetchData } = useFetch('https://api.example.com/data');

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
```

### `useForm`

```javascript
import { useForm } from './path-to-react-custom-hooks';

const initialValues = {
  username: '',
  password: '',
};

function FormComponent() {
  const { values, handleChange, handleSubmit, errors } = useForm(initialValues, validate);

  const handleSubmitForm = () => {
    if (Object.keys(errors).length === 0) {
      // Submit the form
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      {errors.username && <p>{errors.username}</p>}

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

## Contributing

Contributions to this hooks collection are welcome! If you want to add more useful custom hooks or improve the existing ones, please feel free to submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).