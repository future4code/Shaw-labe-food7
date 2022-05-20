import React from 'react';
import { Box, TextField } from '@mui/material';

import { SignUpButton } from './styled';

export const SignUpEditForm = () => {
        
             // const navigate = useNavigate();
    const onSubmitForm = (e) => {
        e.preventDefault();
        // login(form, clear, navigate);
      }

      const [values, setValues] = React.useState({
        
        password: '',
        showPassword: false,
      });
    
    return (
        <div>
             <Box onSubmit={onSubmitForm}
        component="form"
        sx={{
          '& > :not(style)': { m: 0.7, width: '328px' },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField required name={"Logradouro"}  label="Logradouro" variant="outlined" /> <br />
        <TextField required name={"Numero"}  label="Numero" variant="outlined" /> <br />
        <TextField required name={"Complemento"} label="Complemento" variant="outlined" /> <br />
        <TextField required name={"Bairro"} label="Bairro" variant="outlined" /> <br /><TextField required name={"Complemento"} label="Cidade" variant="outlined" /> <br /><TextField required name={"Estado"} label="Estado" variant="outlined" /> 
        
        
        
        
        
        <SignUpButton type="submit">Salvar</SignUpButton>
      

      </Box>
        </div>
    );
}
