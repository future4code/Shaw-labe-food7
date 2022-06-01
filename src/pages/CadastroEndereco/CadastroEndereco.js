import React from "react";
import back from "../../assets/img/back.png";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/Cordinator";
import { useForm } from "../../hooks/useForm";

import { ButtonBack, FormContainer, Hr, IMGBT, Span, SignUpButton} from "./styled";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { HEADER } from "../../constants/token";

export const CadastroEndereco = () => {
  const navigate = useNavigate();
  const { form, onChange, clean } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    axios.put(`${BASE_URL}/address`, form, HEADER)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToFeed(navigate)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  };
  return (
    <div>
      <ButtonBack onClick={() => goToLogin(navigate)}>
        <IMGBT src={back} alt="back" />
      </ButtonBack>
      <Hr />

      <FormContainer>
        <Span>Endereço</Span>
        <Box
          onSubmit={onSubmitForm}
          component="form"
          sx={{
            "& > :not(style)": { m: 0.7, width: "328px" },
          }}
          noValidate
        >
          <TextField
            required
            name={"street"}
            label="Rua"
            variant="outlined"
            value={form.street}
            onChange={onChange}
          />
          <br />
          <TextField
            required
            name={"number"}
            label="Numero"
            variant="outlined"
            value={form.number}
            onChange={onChange}
          />
          <br />
          <TextField
            required
            name={"neighbourhood"}
            label="Bairro"
            variant="outlined"
            value={form.neighbourhood}
            onChange={onChange}
          />
          <br />
          <TextField
            required
            name={"city"}
            label="Cidade"
            variant="outlined"
            value={form.city}
            onChange={onChange}
          />
          <br />
          <TextField
            required
            name={"state"}
            label="Estado"
            variant="outlined"
            value={form.state}
            onChange={onChange}
          />
           <br />
          <TextField
            name={"complement"}
            label="Complemento"
            variant="outlined"
            value={form.complement}
            onChange={onChange}
          />
          <SignUpButton type="submit">Salvar</SignUpButton>
        </Box>
      </FormContainer>
    </div>
  );
};
