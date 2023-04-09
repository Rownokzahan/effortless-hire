import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Page Not found</div>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('jobsCategory.json'),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
