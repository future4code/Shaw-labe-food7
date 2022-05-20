import React from 'react'
import {MainContainer, Imagem} from './styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { goToHome, goToCart, goToProfile} from '../../routes/Cordinator';
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
    <div>
      {location.pathname === '/' ?
        <MainContainer>
          <Imagem onClick={() => goToHome(navigate)} src={homeColor} alt="home" />
          <Imagem onClick={() => goToCart(navigate)} src={shopping} alt="carrinho" />
          <Imagem onClick={() => goToProfile(navigate)} src={perfil} alt="perfil" />
        </MainContainer> : '' } 

      {location.pathname === '/cart' ?
        <MainContainer>
          <Imagem onClick={() => goToHome(navigate)} src={home} alt="home" />
          <Imagem onClick={() => goToCart(navigate)} src={shoppingColor} alt="carrinho" />
          <Imagem onClick={() => goToProfile(navigate)} src={perfil} alt="perfil" />
        </MainContainer> : '' } 
      

      {location.pathname === '/profile' ?
        <MainContainer>
          <Imagem onClick={() => goToHome(navigate)} src={home} alt="home" />
          <Imagem onClick={() => goToCart(navigate)} src={shopping} alt="carrinho" />
          <Imagem onClick={() => goToProfile(navigate)} src={perfilColor} alt="perfil" />
        </MainContainer> : '' } 
    </div>
  )
}
