import React, {useState} from 'react'
import Luz from './Luz'
// componente padre
function TrafficLight(props) {
    
    const [color, setColor] = useState(null) //establezco color con valor inicial null para las luces apagadas
    function cambiarColor(colorSeleccionado){
        if(color == colorSeleccionado){  //si son iguales hice click para que se apague la luz
            setColor(null) 
        } else {
            setColor(colorSeleccionado)
        }
    }


  return (
    <>
    <div className='container'>
        <div className='colores'>
        <Luz color= {color} classColor= "red" cambiarColor= {()=>{cambiarColor("red")}}/> 
        <Luz color= {color} classColor= "yellow" cambiarColor= {()=>{cambiarColor("yellow")}}/> 
        <Luz color= {color} classColor= "green" cambiarColor= {()=>{cambiarColor("green")}}/> 
        </div>
    </div>
    </>
  )
}

export default TrafficLight