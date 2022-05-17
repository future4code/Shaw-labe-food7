import React from 'react'
import {MainContainer, H1, Usuario, Paragrafo, Endereco, Historico, CardDiv, TituloCard, DataCard, SubTotal, ParagradoHistorico, ParagrafoEndereco} from './styled'
import Editar from '../../assets/editar.png'

export const Perfil = () => {
  return (
    <MainContainer>
      <H1>Meu perfil</H1>
      <Usuario>
        <div>
          <Paragrafo>Bruna Oliveira</Paragrafo>
          <Paragrafo>bruna@gmail.com</Paragrafo>
          <Paragrafo>333.333.333-33</Paragrafo>
        </div>
        <div>
          <img src={Editar} alt="editar dados pessoais" />
        </div>
      </Usuario>

      <Endereco>
        <div>
          <ParagrafoEndereco>Endereço cadastrado</ParagrafoEndereco>
          <Paragrafo>Rua Alessandra vieria 45 - Santana</Paragrafo>
        </div>
        <div>
          <img src={Editar} alt="editar endereço" />
        </div>
      </Endereco>

      <Historico>
        <ParagradoHistorico>Historico de pedidos</ParagradoHistorico>
        <CardDiv>
          <TituloCard>Bulguer vila Madalena</TituloCard>
          <DataCard>23 outrobro 2020</DataCard>
          <SubTotal>SUBTOTAL R$ 67,00</SubTotal>
        </CardDiv>
        <CardDiv>
          <TituloCard>Bulguer vila Madalena</TituloCard>
          <DataCard>23 outrobro 2020</DataCard>
          <SubTotal>SUBTOTAL R$ 67,00</SubTotal>
        </CardDiv>
        <CardDiv>
          <TituloCard>Bulguer vila Madalena</TituloCard>
          <DataCard>23 outrobro 2020</DataCard>
          <SubTotal>SUBTOTAL R$ 67,00</SubTotal>
        </CardDiv>
      </Historico>
    </MainContainer>
  );
}
