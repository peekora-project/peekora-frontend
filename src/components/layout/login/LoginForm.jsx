import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import './LoginFormStyle.css';
import LoginFormImage from './components/LoginFormImage';
import LoginFormLogo from './components/LoginFormLogo';
import LoginFormInput from './components/LoginFormInput';
import LoginFormSocialMedia from './components/LoginFormSocialMedia';
import LoginFormLinks from './components/LoginFormLinks';

const LoginForm = () => {
  return (
    <MDBCard>
    <MDBRow className='g-0'>

      <MDBCol md='6'>
        <LoginFormImage/>
      </MDBCol>

      <MDBCol md='6'>
        <MDBCardBody className='d-flex flex-column ' style={{marginTop:'12rem'}}>
            
            {/* Logo Alanı */}
            <LoginFormLogo/>

            {/* Login input alanı */}
            <LoginFormInput/>

            {/* Sosyal Medya Giriş Butonları */}
            <LoginFormSocialMedia/>

            {/* Forgot Password, Register here alanı  */}
            <LoginFormLinks/>

        </MDBCardBody>
      </MDBCol>

    </MDBRow>
  </MDBCard>
  )
}

export default LoginForm;
