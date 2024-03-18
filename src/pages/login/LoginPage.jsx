import React from 'react';
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/layout/login/LoginForm';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Giriş Yap</title>
        <meta name="description" content="Giriş Yap" />
      </Helmet>
      <Row>
        <Col sm={12} md={6}>

        </Col>
        <Col sm={12} md={6}>

        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
