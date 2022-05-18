import React from 'react';
import { Box, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { SignUpButton } from './styled';
import { useForm } from '../../hooks/useForm';
import { signUp } from '../../services/users';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
        
  const navigate = useNavigate();
  const {form, onChange, clean} = useForm({name: "" , email: "", cpf: "", passwod: ""})
  console.log(form)
  const onSubmitForm = (e) => {
      e.preventDefault();
      signUp(form, clean, navigate);
    }

      // const [values, setValues] = React.useState({
        
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
        <TextField required name={"name"} value={form.name} label="Nome" variant="outlined" onChange={onChange} /> <br />
        <TextField required name={"email"} value={form.email}  label="E-mail" variant="outlined" onChange={onChange}/> <br />
        <TextField required type="cpf" pattern={"[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}|[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2}"} name={"cpf"} value={form.cpf} label="CPF" variant="outlined" onChange={onChange}/> <br />
        

        <TextField required type={"password"} name={"password"} value={form.password} label="Senha" variant="outlined" onChange={onChange}/> <br />
        <TextField required type={"password"} name={"confirm"}  label="Confirmar" variant="outlined" /> 
        
        {/* <FormControl sx={{ m: 0.7, width: '328px' }} variant="outlined">
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
        </FormControl> <br />
          
        
         
        
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
        </FormControl> */}
        
        
        <SignUpButton type="submit">Criar</SignUpButton>
      

      </Box>
        </div>
    );
}

export default SignUpForm;