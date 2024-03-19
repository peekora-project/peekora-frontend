import React from 'react';
import {
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const RegistrationInput = () => {
  return (
    <>
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

      <div className="d-flex flex-row align-items-center mb-4 ">
        <MDBIcon fas icon="user me-3" size="lg" />
        <MDBInput label="Your Name" id="form1" type="text" className="w-100" />
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <MDBIcon fas icon="envelope me-3" size="lg" />
        <MDBInput label="Your Email" id="form2" type="email" />
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <MDBIcon fas icon="lock me-3" size="lg" />
        <MDBInput label="Password" id="form3" type="password" />
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <MDBIcon fas icon="key me-3" size="lg" />
        <MDBInput label="Repeat your password" id="form4" type="password" />
      </div>

      <div className="mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Subscribe to our newsletter"
        />
      </div>
    </>
  );
};

export default RegistrationInput;
