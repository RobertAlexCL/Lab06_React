import React from 'react'
import {b} from './laberinto.jsx'
import img from './Vader.jpg'
const Win = ({x,y}) =>{

    const style = {
        width: `${b}px`,
        height: `${b}px`,
        background: 'pink',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
      
        <img src={img} style={style}/>
        
    )
}

export default Win