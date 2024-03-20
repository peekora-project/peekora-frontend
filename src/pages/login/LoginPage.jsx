import React from 'react';
import {
  MDBContainer
}
from 'mdb-react-ui-kit';
import './LoginPageStyle.css'
import LoginForm from '../../components/layout/login/LoginForm';
import { Helmet } from 'react-helmet';

function LoginPage() {
  return (
    <>
    <Helmet>
             <title>Giriş Yap</title>
             <meta name="description" content="Giris Yap" />
    </Helmet>
    <MDBContainer className='form'>
      <LoginForm/>
    </MDBContainer>
    </>
  );
}

export default LoginPage;