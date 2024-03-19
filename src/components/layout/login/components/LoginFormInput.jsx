import React from 'react'
import {
    MDBBtn,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import '../LoginFormStyle.css'

const LoginFormInput = () => {
  return (
    <>
        <h5 className="d-flex fw-normal my-4 pb-3 justify-content-center" style={{letterSpacing: '1px'}}>Sign into your account</h5>

        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

        <MDBBtn className="mb-4 login-button border-0 shadow-5" size='md'>Login</MDBBtn>
    </>
  )
}

export default LoginFormInput