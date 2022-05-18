import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import LoginForm from './LoginForm';

import {  FormContainer, LogoContainer, Span, IMG, LinkStyled1, linkStyle1 } from './styled';


export const Login = () => {
  
  

  

  return (
    <div>
        <LogoContainer>
             
            <IMG src={logo} alt="logo" />
            <Span>Entrar</Span>
            </LogoContainer>
        
        <FormContainer>
            <LoginForm />
        </FormContainer>
        <LinkStyled1>
        <Link to="/cadastro-endereco" style={linkStyle1}>Não possui cadastro? Clique aqui.</Link>
        </LinkStyled1>
        
    </div>
);
}
