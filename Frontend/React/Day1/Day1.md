
# 🧠 Day 1 – Intro, Setup & JSX

## 📌 What is React?
React is a **JavaScript library** for building **user interfaces**, developed by Facebook.  
It enables **component-based architecture** and allows dynamic rendering with **JSX syntax**.

### 🚀 Why use React?
- Reusable components
- Virtual DOM = faster updates
- Strong community & ecosystem
- Works well with APIs

---

## ⚙️ Vite Setup

### ✅ Step-by-step:
1. Download Node.js From => https://nodejs.org/en/download
```bash
npm create vite@latest my-app
```
2. Select Framework As => React
3. Select Varient As => Javascript And Press ENTER
```bash
cd my-app
npm install
npm run dev
```

> This sets up a fast React project with minimal config using **Vite**.

---

## 🗂️ Folder Structure (Vite)

```
my-app/
├── public/
├── src/
│   ├── App.jsx        # Main component
│   ├── main.jsx       # React DOM entry point
│   └── components/    # Custom components (optional)
├── index.html
├── package.json
```

- `main.jsx`: Entry point to render `<App />` into DOM
- `App.jsx`: Main component of the app

---

## 🧬 JSX Syntax (JavaScript + XML)

JSX lets you write HTML-like code in JavaScript.

### ✅ Rules:
- One root element per component
- Use `className` not `class`
- Use `{}` for JS expressions
- Self-close tags like `<br />`, `<img />`

```jsx
const name = "Sagar";
return (
  <div>
    <h1>Hello, {name}</h1>
    <p>This is JSX</p>
  </div>
);
```

---

## 🧩 Create Your First Component

### 🔹 `src/components/HelloUser.jsx`
```jsx
function HelloUser(props) {
  return <h2>Hello, {props.name}!</h2>;
}
export default HelloUser;
```

### 🔹 Use in `App.jsx`
```jsx
import HelloUser from './components/HelloUser';

function App() {
  return (
    <div>
      <HelloUser name="Sagar" />
      <HelloUser name="React Learner" />
    </div>
  );
}
export default App;
```

---

## 📝 Mini Task

✅ Create a component called `HelloUser` that:
- Takes a `name` prop
- Displays a welcome message

### Example Output:
```
Hello, Sagar!
Hello, React Learner!
```
