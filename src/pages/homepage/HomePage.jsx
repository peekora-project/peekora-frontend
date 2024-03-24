import React from 'react'
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/header/Header';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';


const HomePage = () => {
  return (
    <>
        <Helmet>
             <title>Anasayfa</title>
             <meta name="description" content="Anasayfa" />
        </Helmet>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
    </>
  )
}

export default HomePage