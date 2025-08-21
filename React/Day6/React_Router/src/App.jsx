import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
    {
      path: '/about',
      element : <About/>
    },
    {
      path : '/contact', 
      element:<Contact/>
    }

  ])

   
   return<RouterProvider router={router} />;

}

export default App
