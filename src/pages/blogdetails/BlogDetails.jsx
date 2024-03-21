import React from 'react'
import ProfileCard from '../../components/layout/blogdetails/ProfileCard'

const BlogDetails = () => {
  return (
    <div>
        
  <MDBContainer>
<Row>
    <Col md={9}></Col>
    <Col md={3}>
    <ProfileCard/>
    </Col>
</Row>
  </MDBContainer>
    </div>
  )
}

export default BlogDetails
