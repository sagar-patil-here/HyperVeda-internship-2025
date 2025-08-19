
# 📅 Day 3 – Conditional Rendering + Lists

## 🔹 Conditional Rendering

React allows you to show or hide elements conditionally.

### ✅ if-else (used inside functions, not JSX directly)
```jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  let content;

  if (isLogged) {
    content = (
      <div>
        <h1>You are Logged in</h1>
        <button onClick={() => setIsLogged(false)}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <h1>Please Login</h1>
        <button onClick={() => setIsLogged(true)}>Login</button>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default App;

```

### ✅ Ternary Operator (used inside JSX)

Ternary operators are used to minimized the if else syntax works exact like a if else :

syntax : (condition)?true:false


```jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div>
      {isLogged ? (
        <button>You Are Logged in...</button>
      ) : (
        <button>Login..</button>
      )}
    </div>
  );
}

export default App;

```

### ✅ Logical AND (`&&`)
```jsx
{showAlert && <p>This is an alert message</p>}
```

---

## 🔹 Rendering Lists with `.map()`

You can loop through an array and return JSX for each item.

```jsx
const names = ["Sagar", "Ravi", "Pooja"];

<ul>
  {names.map((name, index) => (
    <li key={index}>{name}</li>
  ))}
</ul>
```

---

## 🔹 Using `key` Prop

The `key` helps React identify which items changed. It should be unique.

```jsx
const users = [{ id: 1, name: "Sagar" }, { id: 2, name: "Patil" }];

<ul>
  {users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>
```

> Avoid using `index` as key unless there's no unique id

---

## 🧩 Mini Task: Todo List (Add + Delete)

### ✅ Requirements
- Input box to type new todo
- Add button to push todo into list
- Delete button to remove todo from list

### 💡 Example Implementation
```jsx
import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setList([...list, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

---
