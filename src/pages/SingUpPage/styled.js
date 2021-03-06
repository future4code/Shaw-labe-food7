import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  min-width: 104px;
  min-height: 58px;
`
export const IMG = styled.img`
  width: 104px;
  height: 58px;
`

export const Span = styled.span`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  margin-top: 1rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`

export const SignUpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  background-color: #e86e5a;
  width: 296px;
  height: 42px;
  padding: 0 16px;
  cursor: pointer;
`
export const LinkStyled1 = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
`

export const linkStyle1 = {
  margin: '1rem',
  textDecoration: 'none',
  color: 'black',
  fontSize: '0.9rem',
  fontFamily: 'Roboto',
}

export const ButtonBack = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`


export const IMGBT = styled.img`
width: 24px;
height: 24px;
margin-top: 2rem;
`
export const Hr = styled.hr`
  background-color: black;
  height: 1px;
  border: none;
`