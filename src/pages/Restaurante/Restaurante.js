import React from 'react'
// import { useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import useRequestData from '../../hooks/useRequestData'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/url'
import RestauranteCard from '../../components/RestauranteCard/RestauranteCard'
import { ScreenContainer, CardContainer, LogoContainer, Span, IMG } from './styled'


export const Restaurante = () => {

  useProtectedPage()
  // const navigate = useNavigate()

  const result = useRequestData({}, `${BASE_URL}/restaurants/10`)
  console.log(result.restaurant)

  return (
      <ScreenContainer>
        <LogoContainer>
          <IMG src={logo} alt="logo" />
          <Span>Restaurante</Span>
        </LogoContainer>
        {result.restaurant && 
          <CardContainer>
            <RestauranteCard result={result}
            // key={result.id}
            // category={result.category}
            // price={result.price}
            // name={result.name}
            // description={result.description}
            />
          </CardContainer>}
    </ScreenContainer>
  )
}
