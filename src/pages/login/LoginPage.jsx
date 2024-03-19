import React from 'react';
import {
  MDBContainer
}
from 'mdb-react-ui-kit';
import './LoginPageStyle.css'
import LoginForm from '../../components/layout/login/LoginForm';

function LoginPage() {
  return (
    <MDBContainer className='form'>
      <LoginForm/>
    </MDBContainer>
  );
}

export default LoginPage;