import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToEditSignUp, goToSignUp } from "../routes/Cordinator"

export  const login = async (body, clean, navigate) => {
    await axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clean()
      goToSignUp(navigate)
    })
     .catch((error) => {
       alert(error)
     })
  }



  export  const signUp = async (body, clean, navigate) => {
    await axios.post(`${BASE_URL}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clean()
      console.log("Deu certo!!!!!!!")
    })
     .catch((error) => {
       console.log(error.response)
     })
  }
  