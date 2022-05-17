import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { Login } from './pages/Login/Login';
import { SingUpPage } from './pages/SingUpPage/SingUpPage';
import { CadastroEndereco } from './pages/CadastroEndereco/CadastroEndereco';

function RoutesApp() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SingUpPage />} />
                <Route path="/cadastro-endereco" element={<CadastroEndereco />} />

            </Routes>
        </BrowserRouter>
    );
}


export default RoutesApp;