import React from 'react'
import {MainContainer, Imagem} from './styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { goHome, cart, profile} from '../../routes/Cordinator';
import home from '../../assets/img/footer/homepage.png'
import homeColor from '../../assets/img/footer/homepage-color.png'
import shopping from '../../assets/img/footer/shopping-cart.png'
import shoppingColor from '../../assets/img/footer/shopping-cart-color.png'
import perfil from '../../assets/img/footer/avatar.png'
import perfilColor from '../../assets/img/footer/avatar-color.png'


export const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <MainContainer>
      {location.pathname === '/' ?
        <div>
          <Imagem onClick={() => goHome(navigate)} src={homeColor} alt="home" />
          <Imagem onClick={() => cart(navigate)} src={shopping} alt="carrinho" />
          <Imagem onClick={() => profile(navigate)} src={perfil} alt="perfil" />
        </div> : '' } 

      {location.pathname === '/car' ?
        <div>
          <Imagem onClick={() => goHome(navigate)} src={home} alt="home" />
          <Imagem onClick={() => cart(navigate)} src={shoppingColor} alt="carrinho" />
          <Imagem onClick={() => profile(navigate)} src={perfil} alt="perfil" />
        </div> : '' } 
      

      {location.pathname === '/profile' ?
        <div>
          <Imagem onClick={() => goHome(navigate)} src={home} alt="home" />
          <Imagem onClick={() => cart(navigate)} src={shopping} alt="carrinho" />
          <Imagem onClick={() => profile(navigate)} src={perfilColor} alt="perfil" />
        </div> : '' } 
    </MainContainer>
  )
}
