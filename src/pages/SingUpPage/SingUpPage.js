import React from 'react'
import SignUpForm from './SignUpForm'
import { ButtonBack, FormContainer, Hr, IMG, IMGBT, LogoContainer, Span } from './styled'
import logo from '../../assets/img/logo.png'
import back from '../../assets/img/back.png'
import { goToLogin } from '../../routes/Cordinator'
import { useNavigate } from 'react-router-dom'

export const SingUpPage = () => {
  const navigate = useNavigate()
  return (
    <div>
        <ButtonBack onClick={() => goToLogin(navigate)}>
        <IMGBT src={back} alt="back" />
        </ButtonBack>
        <Hr />

      <LogoContainer>
        <IMG src={logo} alt="logo" />
        <Span>Cadastrar</Span>
      </LogoContainer>
      <FormContainer>
      <SignUpForm />
      </FormContainer>
    </div>
  )
}
