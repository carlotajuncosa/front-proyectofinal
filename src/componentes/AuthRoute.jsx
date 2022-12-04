import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthRoute = ({component}) => {
  const {user, token} = useSelector(state => state.auth)
  if(user === null) return(<Navigate to="/"/>);
  if(user) return component
}

export default AuthRoute