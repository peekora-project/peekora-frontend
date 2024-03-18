import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import LoginForm from '../../components/layout/login/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Giriş Yap</title>
        <meta name="description" content="Giriş Yap" />
      </Helmet>
      <Row>
        <Col sm={12} md={6}>
          <LoginForm/>
        </Col>
        <Col sm={12} md={6}>

        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
