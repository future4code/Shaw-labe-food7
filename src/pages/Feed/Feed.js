import React, { useState } from 'react'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'

export const Feed = () => {
  const [listaRestaurantes, setListaRestaurantes] = useState()
 const Lista = ()=>{
  axios.get (`${BASE_URL}/restaurants`, {
    headers: {
      auth: localStorage.getItem("token")
    }
  })
  
  .then((response)=>{
   setListaRestaurantes (response.data)
  
  })
  .catch((error)=>{
    console.log(error)
  })
}

console.log(listaRestaurantes)

  
  

  return (
    <div>
    <header>
      <h1>Rappi4</h1>
      </header>
      <input type="text" placeholder='busar'/>

      <p>Massas</p>
      <p>Lanches</p>
      <p>Italianas</p>
      
    {Lista}
    </div>
    
  )
}
