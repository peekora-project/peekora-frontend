import React from "react";
import {
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  import '../LoginFormStyle.css';

const LoginFormSocialMedia = () => {
  return (
    <div className="d-flex justify-content-center mb-3">
    <MDBBtn className="me-2" color="danger" size="md" style={{ borderRadius: '50%' }}>
      <MDBIcon fab icon="google" />
    </MDBBtn>
    <MDBBtn className="me-2 facebook-icon" color="primary" size="md" style={{ borderRadius: '50%'}}>
      <MDBIcon fab icon="facebook-f" />
    </MDBBtn>
    <MDBBtn color="primary" size="md" style={{ backgroundColor: '#0e76a8', borderRadius: '50%' }}>
      <MDBIcon fab icon="linkedin-in" />
    </MDBBtn>
  </div>
  );
};

export default LoginFormSocialMedia;
