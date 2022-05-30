import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <>
    <h1>OOPS !</h1>
    <h3>Page not found</h3>

    <Link to="/">Go Back</Link>
    </>
  )
}

export default ErrorPage;