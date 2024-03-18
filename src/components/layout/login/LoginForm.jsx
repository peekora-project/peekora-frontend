import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LoginFormStyle.scss';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
  return (
    <>
        <div className="login-form">
        <Form>
          <FormGroup>
            <Label for="email">E-posta</Label>
            <Input type="email" name="email" id="email" placeholder="E-posta adresinizi girin" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Şifre</Label>
            <Input type="password" name="password" id="password" placeholder="Şifrenizi girin" />
          </FormGroup>
          {/* Google reCAPTCHA entegrasyonunu buraya ekle */}
          <Button color="primary">Giriş Yap</Button>
        </Form>
        <div className="social-login">
          <FormText>veya sosyal medya ile giriş yap:</FormText>
          <Button className="social-button google"><FontAwesomeIcon icon={faGoogle} /> Google ile Giriş</Button>
          <Button className="social-button facebook"><FontAwesomeIcon icon={faFacebookF} /> Facebook ile Giriş</Button>
          <Button className="social-button linkedin"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn ile Giriş</Button>
        </div>
      </div>
    </>
  )
}

export default LoginForm