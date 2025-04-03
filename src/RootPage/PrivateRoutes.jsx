import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../Components/Loader/Loader'

const PrivateRoutes = ({ children }) => {
  const { user, Loading } = useContext(AuthContext)
  const location = useLocation()

  if (Loading) {
    return <Loader />
  }
  if (user) {
    return children
  }

  return <Navigate state={location.pathname} to={'/signin'}></Navigate>
}

export default PrivateRoutes