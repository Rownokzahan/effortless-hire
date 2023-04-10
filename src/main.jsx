import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import { JobCategoryAndJobsLoader } from './Loaders/JobCategoryAndJobsLoader'
import JobDetails from './components/JobDetails'
import { JobDetailsLoader } from './Loaders/JobDetailsLoader'
import AppliedJobs from './components/AppliedJobs'
import { AppliedJobsLoader } from './Loaders/AppliedJobsLoader'
import { Toaster } from 'react-hot-toast'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: JobCategoryAndJobsLoader,
      },

      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: ({ params }) => JobDetailsLoader(params.id)
      },

      {
        path: '/applied-jobs',
        element: <AppliedJobs />,
        loader: AppliedJobsLoader,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
