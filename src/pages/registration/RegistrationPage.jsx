import React from 'react';
import {
  MDBContainer,
}
from 'mdb-react-ui-kit';
import './RegistrationPageStyle.css'
import RegistrationForm from '../../components/layout/registration/RegistrationForm';

function RegistrationPage() {
  return (
    <MDBContainer className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh'}}>
    <RegistrationForm/>
   </MDBContainer>
  );
}

export default RegistrationPage;