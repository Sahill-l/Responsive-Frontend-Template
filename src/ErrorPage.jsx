import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
   <>
            <div className="container-fluid d-flex">
                <div className='m-auto mt-'>
                    <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000' alt='error' style={{width:30+"em", height:30+"em"}}></img>
                    <br/>
                    <button type="button" class="btn btn-primary">
                        <NavLink to="/" className="text-white" style={{textDecoration:"none"}}>Go Back</NavLink>
                    </button>
                </div>
            </div>
   </>
  )
}

export default ErrorPage