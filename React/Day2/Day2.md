
# ⚛️ Day 2 – Components, Props & State

## 🔹 Functional Components

Functional components are basic JavaScript functions that return JSX.

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

You can also use **arrow functions**:

```jsx
const Welcome = () => <h1>Welcome to React!</h1>;
```

---

## 📦 Props and How to Pass Data

**Props** are used to pass data from parent to child component.

```jsx
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```

### 🔹 Use it in App.jsx
```jsx
<Greeting name="Sagar" />
```

> Props are **read-only**.

---

## 🧠 useState Hook Basics

`useState` is a React Hook to manage component-level state.

```jsx
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- `useState(0)` → initial value
- `setCount()` → function to update the state

---

## 🖱️ Event Handling in React

Events like `onClick`, `onChange`, etc. are written in camelCase.

### 🔹 Button Click Example
```jsx
<button onClick={handleClick}>Click me</button>
```

### 🔹 Input Change Example
```jsx
<input type="text" onChange={(e) => console.log(e.target.value)} />
```

> Always use arrow functions or handler methods

---

## 🧩 Mini Task: Build a Counter App

### ✅ Requirements:
- A button to increase the count
- Display the count on screen

### 🧾 Example Output:
```
Count: 0
[ Increase ]
```

### 💡 Hint:
Use `useState`, and update value on button `onClick`

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increase</button>
```

---
