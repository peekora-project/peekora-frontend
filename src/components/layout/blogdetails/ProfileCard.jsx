import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const ProfileCard = () => {
  return (
      <MDBContainer className="py-3" >
        <MDBRow className="justify-content-center">
        <MDBCol>
            <MDBCard style={{ borderRadius: "15px", height: "280px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-2 mb-2">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle"
                    fluid
                    style={{ width: "40px" }}
                  />
                </div>
                <MDBTypography tag="h5">Julie L. Arsenault</MDBTypography>
                <MDBCardText className="text-muted mb-2">
                  @Programmer <span className="mx-2">|</span>{" "}
                  <a href="#!">user@mail.com</a>
                </MDBCardText>
                <div className="mb-2 pb-1">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="md" />
                  </MDBBtn>
                  <MDBBtn outline floating >
                    <MDBIcon fab icon="github" size="md" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="linkedin" size="md" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="sm">
                  Message now
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-2 mb-1">
                  <div>
                    <MDBCardText className="mb-1 h5">8471</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                     Bloglar
                    </MDBCardText>
                  </div>
                  <div >
                    <MDBCardText className="mb-1 h5">8512</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Takipçiler
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">4751</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                    Görüntüleme
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
};

export default ProfileCard;
