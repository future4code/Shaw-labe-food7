import React from 'react'
import back from '../../assets/img/back.png'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../routC'
import { ButtonBack, FormContainer, Hr, IMGBT, LogoContainer, Span } from './styled'
import SignUpEditForm from './SignUpEditForm'

export const SignUpEdit = () => {
  const navigate = useNavigate()
  return (
    <div>
      
      <ButtonBack onClick={() => goToLogin(navigate)}>
        <IMGBT src={back} alt="back" />
        </ButtonBack>
        <Hr />

        <LogoContainer>
        
        <Span>Meu endereço</Span>
      </LogoContainer>
      <FormContainer>
      <SignUpEditForm />
      </FormContainer>

    </div>
  )
}
