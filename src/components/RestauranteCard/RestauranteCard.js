import React, { useState } from 'react'
import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { RestauranteCardContainer, RestauranteCardContent, IMG } from "./styled"

const RestauranteCard = (props) => {
// console.log(props.result.restaurant)

// const [detalhes, setDetalhes] = useState({})

const restaurante = props.result.restaurant
console.log(restaurante)



  return (
    <RestauranteCardContainer onClick={props.onClick}>
        <CardActionArea>
            <Box sx={{ 
                minWidth: 300, 
                maxWidth: 600,
            }}>
                <Card variant="outlined">
                    <RestauranteCardContent>
                        <Typography align={'center'}>
                            <IMG src={restaurante.logoUrl} />
                            <p>Categoria: {restaurante.category}</p>
                            <p>Endereço: {restaurante.address}</p>
                            <p>Tempo de Entrega: {restaurante.deliveryTime}</p>
                            <p>Descrição: {restaurante.description}</p>
                            <p>Frete: {restaurante.shipping}</p>
                        </Typography>
                    </RestauranteCardContent>
                </Card>
            </Box>
        </CardActionArea>
    </RestauranteCardContainer>
  )
}

export default RestauranteCard