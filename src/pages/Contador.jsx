import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Contador = () => {
    
  //let numero = 0;    
  //função que muda o estado toda vez que ele é atualizado
  let [numero, setNumero] = useState(0)
  function add(){
      setNumero(++numero)
      console.log(++numero)
  };
  function sub(){
    setNumero(numero - 5)
    console.log(numero - 5)
  };
  function sub5(){
    setNumero(numero - 5)
    console.log(numero - 5)
  };
  function sub10(){
    setNumero(numero - 10)
    console.log(numero - 10)
  };
  function add5(){
    setNumero(numero + 5)
    console.log(numero + 5)
  };
  function add10(){
    setNumero(numero + 10)
    console.log(numero + 10)
  };

  return (
    <div>
        <h1>
            Contador
        </h1>
        
        <Button variant="danger" onClick={sub}> - 1 </Button>
        <Button variant="warning" onClick={sub5}> - 5</Button>
        <Button variant="dark" onClick={sub10}> - 10</Button>
        {numero}
        <Button variant="success" onClick={add}> + 1 </Button>
        <Button variant="info" onClick={add5}> + 5 </Button>
        <Button variant="primary" onClick={add10}> + 10 </Button>

    </div>
  )
}

export default Contador