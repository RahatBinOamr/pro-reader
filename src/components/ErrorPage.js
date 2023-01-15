import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
    
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1><br />
        {
          error && (
           <div>
            <p className='text-red-600 text-xl'> {error.statusText || error.message} </p> <br />
            <p className='text-3xl text-gray-500'>{error.status} </p> <br />
          <Link to={'/'}><button className="btn btn-success">Go To Home</button></Link>
          
           </div>

          )
        }
      </div>
    </>
  )
}

export default ErrorPage
