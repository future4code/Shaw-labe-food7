import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/LoginPage/LoginPage';
import  {SingUpPage}  from '../pages/SingUpPage/SingUpPage';
import {CadastroEndereco}  from '../pages/CadastroEndereco/CadastroEndereco';
import { Feed } from '../pages/Feed/Feed'
import { Carrinho } from '../pages/Carrinho/Carrinho'
import { Perfil } from '../pages/Perfil/Perfil'



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SingUpPage />} />
                <Route path="/address" element={<CadastroEndereco />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/cart" element={<Carrinho />} />
                <Route path="/profile" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
}
