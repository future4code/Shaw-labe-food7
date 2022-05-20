import React, { useState } from 'react';
import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from './styled';
import { login } from '../../services/users';
import { useForm } from '../../hooks/useForm'

function LoginForm() {
    const navigate = useNavigate();
    const {form, onChange, clean} = useForm({email: "" , password: ""})
    console.log(form)
    const onSubmitForm = (e) => {
        e.preventDefault();
        login(form, clean, navigate);
      }

      // const [values, setValues] = useState({
        
      //   password: '',
      //   showPassword: false,
      // });
    
      // const handleChange = (prop) => (event) => {
      //   setValues({ ...values, [prop]: event.target.value });
      // };
    
      // const handleClickShowPassword = () => {
      //   setValues({
      //     ...values,
      //     showPassword: !values.showPassword,
      //   });
      // };
    
      // const handleMouseDownPassword = (event) => {
      //   event.preventDefault();
      // };
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
        
        <TextField required name={"email"} value={form.email} label="E-mail" variant="outlined" onChange={onChange} /> <br />
        <TextField required type={"password"} name={"password"} value={form.password} label="Senha" variant="outlined" onChange={onChange} /> 

        {/* <FormControl sx={{ m: 0.7, width: '328px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={onChange}
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
        </FormControl> */}
        
        
        <LoginButton type="submit">Entrar</LoginButton>
      

      </Box>
        </div>
    );
}

export default LoginForm;