
# Day 6 – React Router DOM

## SPA vs MPA

### SPA (Single Page Application)
- Loads a single HTML file and dynamically updates content without refreshing the page.
- Only part of the page updates when navigating, resulting in faster user experience.
- Uses client-side routing.
- Example: React apps, Gmail

**Advantages:**
- Faster transitions
- Better user experience
- Efficient loading (after initial load)

**Disadvantages:**
- Slower initial load
- SEO challenges (unless handled properly)

### MPA (Multi Page Application)
- Every new page is loaded from the server.
- Full-page reloads occur on navigation.
- Uses traditional server-side routing.
- Example: E-commerce websites, WordPress

**Advantages:**
- Better SEO
- Suitable for large-scale apps

**Disadvantages:**
- Slower navigation
- More server requests

---

## React Router DOM

`react-router-dom` is a standard routing library for React.

### Installation
```bash
npm install react-router-dom
```

### BrowserRouter
- Used to wrap the app and enable routing functionality.
```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

### Routes & Route
- Used to define different routes in the application.
```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

### Link
- Used for navigation instead of `<a>` to prevent page reloads.
```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

### useNavigate
- A hook for programmatic navigation.
```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/contact");
```

---

## 👉 Mini Task: 3-Page App

### Objective:
Create a 3-page React application with navigation links to Home, About, and Contact pages.

### Steps:
1. Install `react-router-dom`.
2. Create components: `Home.js`, `About.js`, `Contact.js`.
3. Setup routing using `BrowserRouter`, `Routes`, and `Route`.
4. Use `Link` to navigate between pages.
5. (Optional) Use `useNavigate` in a button to redirect programmatically.

**File Structure:**
```
src/
├── components/
│   ├── Home.js
│   ├── About.js
│   └── Contact.js
├── App.js
└── index.js
```

**App.js Sample:**
```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
