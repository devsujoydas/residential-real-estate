import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootPage from './RootPage/RootPage.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Teams from './Pages/Teams/Teams.jsx'
import Blogs from './Pages/Blogs/Blogs.jsx'
import SignIn from './Pages/SignIn/SignIn.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import MemberDetails from './Pages/Teams/MemberDetails.jsx'
import BlogDetails from './Pages/Blogs/BlogDetails.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx'
import PrivateRoutes from './RootPage/PrivateRoutes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/aboutus",
        element: <About />
      },
      {
        path: "/profile",
        element: <PrivateRoutes><ProfilePage /></PrivateRoutes>
      },
      {
        path: "/teams",
        element: <Teams />
      },
      {
        path: "/memberDetails/:id",
        element: <PrivateRoutes><MemberDetails /></PrivateRoutes>
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blogDetails/:id",
        element: <PrivateRoutes> <BlogDetails /></PrivateRoutes>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
