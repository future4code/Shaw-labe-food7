import React from 'react';
import { Box, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { SignUpButton } from './styled';

function SignUpForm() {
        
             // const navigate = useNavigate();
    const onSubmitForm = (e) => {
        e.preventDefault();
        // login(form, clear, navigate);
      }

      const [values, setValues] = React.useState({
        
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
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
        <TextField required name={"name"}  label="Nome" variant="outlined" /> <br />
        <TextField required name={"email"}  label="E-mail" variant="outlined" /> <br />
        <TextField required type="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" name={"cpf"}  label="cpf" variant="outlined" /> <br />
        
        
        <FormControl sx={{ m: 0.7, width: '328px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>
          
        
         
        
        <FormControl sx={{ m: 0.7, width: '328px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        
        
        <SignUpButton type="submit">Criar</SignUpButton>
      

      </Box>
        </div>
    );
}

export default SignUpForm;