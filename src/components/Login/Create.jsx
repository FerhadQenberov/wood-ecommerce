import React from 'react'
import { NavLink } from 'react-router-dom'


const Create = () => {
  
  return (
    <div id="form">
    <p>
      <b>No Account yet?</b>
    </p>
    <NavLink to="/register"   className="link">Create an account</NavLink>
  </div>
  )
}

export default Create
