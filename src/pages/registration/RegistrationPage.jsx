import React from 'react';
import {
  MDBContainer,
}
from 'mdb-react-ui-kit';
import './RegistrationPageStyle.css'
import RegistrationForm from '../../components/layout/registration/RegistrationForm';
import { Helmet } from 'react-helmet';

function RegistrationPage() {
  return (
  <>
  <Helmet>
      <title>Giriş Yap</title>
      <meta name="description" content="Giris Yap" />
  </Helmet>
  <MDBContainer className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh'}}>
    <RegistrationForm/>
  </MDBContainer>
  </>
  );
}

export default RegistrationPage;