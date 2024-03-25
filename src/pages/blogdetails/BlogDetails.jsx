import React from "react";
import ProfileCard from "../../components/layout/blogdetails/ProfileCard";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const BlogDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol
          md={12}
          className="bg-secondary">
          <p>Navbar</p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md={9} className="bg-success-subtle p-0 m-0"></MDBCol>
        <MDBCol md={3} className="p-0 m-0">
        <div style={{ backgroundColor: "#eee" }}>
          <ProfileCard />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default BlogDetails;
