# Day 6 -- React Router DOM (Advanced)

**Topic:** Using `createBrowserRouter` in React Router v6.4+
https://reactrouter.com/home
------------------------------------------------------------------------

## 1. What is `createBrowserRouter`?

-   It is the **new way** to create routes in React Router (introduced
    in v6.4+).\
-   Provides a **centralized route configuration** instead of JSX-based
    `<Routes>`.\
-   Useful for **data loading, actions, error handling, nested
    routing**.

------------------------------------------------------------------------

## 2. Syntax of `createBrowserRouter`

``` jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
```
=> Navigation using Link

Link is used to navigate without refreshing the page.

It prevents full page reload and maintains SPA (Single Page Application) behavior.

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;





=> Navigation using NavLink

NavLink works like Link but adds styling to the active route.

Very useful for highlighting which page is currently active.

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Home
      </NavLink> | 

      <NavLink 
        to="/about" 
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        About
      </NavLink> | 

      <NavLink 
        to="/contact" 
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;

------------------------------------------------------------------------

## 3. Advantages over BrowserRouter

-   Centralized route definition in **array form**.\
-   Easy to handle **nested routes**.\
-   Supports **errorElement** for custom error pages.\
-   Allows **data APIs (loaders & actions)**.

------------------------------------------------------------------------



``` jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
```

👉 Here, `<Layout />` is a wrapper component (with header, footer,
navbar).

------------------------------------------------------------------------

## 4. Error Handling

``` jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);
```

-   If route not found → **ErrorPage** renders.

------------------------------------------------------------------------

## 5. Mini Task -- Create App with Nested Routes

👉 Pages: `Home`, `About`, `Contact`, `ErrorPage`\
👉 Use `Layout` with **Navbar** and `Outlet` for rendering children.

**Steps:**\
1. Install React Router DOM → `npm install react-router-dom`\
2. Create components: `Home.js`, `About.js`, `Contact.js`,
`ErrorPage.js`, `Layout.js`\
3. Define router using `createBrowserRouter`.\
4. Wrap root in `<RouterProvider router={router} />`.\
5. Add navigation links in `Layout`.

------------------------------------------------------------------------

✅ Now you have a **Day 6 syllabus** with `createBrowserRouter`.
