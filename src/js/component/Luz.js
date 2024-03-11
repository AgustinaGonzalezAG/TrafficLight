import React, {useState} from 'react'

function Luz(props) {

  return (
    <div className={ `circulo  ${props.classColor} ${props.classColor == props.color ? "white-glow": ""}` } onClick={props.cambiarColor} >
      
    </div>
  )
}

export default Luz