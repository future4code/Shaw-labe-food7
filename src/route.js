import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUpEdit } from './pages/CadastroEndereco/SignUpEdit';
import { Login } from './pages/LoginPage/LoginPage';
import { SingUpPage } from './pages/SingUpPage/SingUpPage';


function RoutesApp() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SingUpPage />} />
                <Route path="signup-edit" element={<SignUpEdit />} />

            </Routes>
        </BrowserRouter>
    );
}


export default RoutesApp;