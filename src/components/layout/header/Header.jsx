import React from "react";
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBNavbarItem,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import "./Header.css";

const Header = () => {
    
  return (
    <div>
      {/* Üst Navbar */}
      <MDBNavbar expand="lg" light bgColor="white" className="py-2 shadow-0 border-bottom border-1">
        <div className="container">
          {/* Sosyal Medya İkonları */}
          <div className="d-flex align-items-center">
            <MDBIcon fab icon="facebook-f" className="me-3 border-end pe-2 border-1" />
            <MDBIcon fab icon="instagram" className="me-3 border-end pe-2 border-1" />
            <MDBIcon fab icon="linkedin-in" className="me-3 border-end pe-2 border-1" />
            <MDBIcon fab icon="twitter" className="me-3" />
          </div>

          {/* Sağ Taraftaki Butonlar */}
          <MDBNavbarItem className='d-flex'>
          <Link to={"/login"}><MDBBtn outline size="sm" className="me-2 text-capitalize border-0 no-hover border-end pe-3 border-1" style={{textTransform: 'none' , color: '#000000'}}>Giriş yap</MDBBtn></Link>
          
          <Link to={"/registration"}><MDBBtn size="sm" className="text-capitalize border-0 shadow-0" style={{backgroundColor: 'transparent', color: '#000000', textTransform: 'none'}}>Kayıt ol</MDBBtn></Link>
          </MDBNavbarItem>
        </div>
      </MDBNavbar>

      {/* Mevcut Navbar */}
      <header role="banner">
        <MDBNavbar
          id="navbar-primary"
          bg="transparent"
          expand="lg"
          variant="light"
          className="d-flex flex-column align-items-center shadow-0 border-bottom border-1"
        ><MDBNavbarBrand href="#" className="d-flex justify-content-center didact-gothic-regular">
        <h1 style={{ display: "block", margin: "5px auto", fontSize: "4rem" }}>
          peekora
        </h1>
      </MDBNavbarBrand>
      <div className="w-100 d-flex justify-content-between align-items-center">
        {/* Sol taraf: Arama ikonu */}
        <div className="ms-3 border-end pe-2 border-1 hide-on-mobile">
          <MDBIcon fas icon="search" />
        </div>
  
        {/* Orta kısım: Menü linkleri */}
        <MDBNavbarNav className="d-flex justify-content-center didact-gothic-regular fs-5">
          <MDBNavbarLink>Ana Sayfa</MDBNavbarLink>
          <MDBNavbarLink>Kategoriler</MDBNavbarLink>
          <MDBNavbarLink>Trend Bloglar</MDBNavbarLink>
          <MDBNavbarLink>Hakkında</MDBNavbarLink>
          <MDBNavbarLink>Emeği geçenler</MDBNavbarLink>
        </MDBNavbarNav>
  
        {/* Sağ taraf: Gece-Gündüz modu ikonu */}
        <div className="me-3 border-start ps-2 border-1 hide-on-mobile">
          <MDBIcon fas icon="moon" />
        </div>
      </div>
    </MDBNavbar>
      </header>
    </div>
  );
};

export default Header;
