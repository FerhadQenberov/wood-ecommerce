import React from 'react'
import Form from './Form'
import Create from './Create'


const LoginCanvas = () => {
  return (
    <>
       <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
          <p className='sign'>Sign in</p>
       
         <p className='close' data-bs-dismiss="offcanvas" aria-label="Close" > X Close</p>
       
      </div>


      <div className="offcanvas-body">
        <Form />
        <Create/>


      
      </div>
      </div>
      
    </>
  )
}

export default LoginCanvas
