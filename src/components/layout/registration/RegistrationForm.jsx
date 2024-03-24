import React from 'react';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './RegistrationFormStyle.css'
import RegistrationSocialMedia from './components/RegistrationSocialMedia';
import RegistrationInput from './components/RegistrationInput';
import { Link } from 'react-router-dom';


const RegistrationForm = () => {
  return (
    <>
        <MDBCard className='text-black' style={{borderRadius: '25px'}}>
      <MDBCardBody className='shadow-5'>
        <MDBRow >
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center' >

            <RegistrationInput/>
            
            <RegistrationSocialMedia/>

            <MDBBtn className='mb-4 register-button border-0 shadow-5' size='md'>Kayıt Ol</MDBBtn>

          </MDBCol>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
          </MDBCol>

        </MDBRow>
        <Link to={"/"} className='underline'>Anasayfaya Dön</Link>
      </MDBCardBody>
    </MDBCard>
    </>
  )
}

export default RegistrationForm