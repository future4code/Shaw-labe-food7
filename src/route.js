import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUpEdit } from './pages/CadastroEndereco/SignUpEdit';
import { Login } from './pages/LoginPage/LoginPage';
import { SingUpPage } from './pages/SingUpPage/SingUpPage';


import { CadastroEndereco } from './pages/CadastroEndereco/CadastroEndereco';
import { Feed } from './pages/Feed/Feed';


function RoutesApp() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SingUpPage />} />

                  <Route path="signup-edit" element={<SignUpEdit />} />
                <Route path="/cadastro-endereco" element={<CadastroEndereco />} />
                <Route path="/feed" element={<Feed />} />


            </Routes>
        </BrowserRouter>
    );
}


export default RoutesApp;