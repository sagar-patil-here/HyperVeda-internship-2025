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

## 🛠️ What is a Hook?

A **Hook** is a special function in React that lets you “hook into” React features such as **state** and **lifecycle methods** inside functional components.  

- Hooks **start with `use`** (e.g., `useState`, `useEffect`)  
- They **cannot** be used inside loops, conditions, or nested functions — only at the top level of a component.  

---

## 📌 What is State?

**State** is a built-in object in React components that stores dynamic data and determines how the component behaves or appears.  

- **State changes → UI updates automatically**  
- Unlike props, **state is managed inside the component**  
- Used for **interactive features** like counters, form inputs, toggles, etc.  

Example:  
```jsx
const [count, setCount] = useState(0);
```
Here:
- `count` → current value of the state  
- `setCount` → function to update the state  

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
- A button to decrease the count
- A button to reset the count 
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
