import React from 'react'
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/header/Header';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Footer from '../../components/layout/footer/Footer';
import './HomePage.css'


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
              <Header/>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md={9} className='bg-success-subtle'>
            </MDBCol>
            <MDBCol md={3} className='bg-secondary'>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBRow>
            <MDBCol md="12">
              <Footer/>
            </MDBCol>
        </MDBRow>
        
    </>
  )
}

export default HomePage