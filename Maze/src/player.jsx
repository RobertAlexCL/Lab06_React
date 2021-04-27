import React from 'react'
import {b} from './laberinto.jsx'
import img from './Luke.png'
import img2 from './Luke-2.png'
const Player = ({direction,x,y}) =>{
    let rotacion = 0
    if(direction === 0){
        rotacion = 270
    }
    if(direction === 1){
    
        rotacion = 0
        
    }
    if(direction === 2){
        rotacion = 90
    }
    if(direction === 3){
        rotacion = 0
        const style = {
        width: `${b}px`,
        height: `${b}px`,
        gridColumnStart: x+1,
        gridRowStart: y+1,
        transform:`rotate(${rotacion}deg)`
    
    }
    return (
        <img src={img} style={style}/>
        )
    }





    const style = {
        width: `${b}px`,
        height: `${b}px`,
        gridColumnStart: x+1,
        gridRowStart: y+1,
        transform:`rotate(${rotacion}deg)`
    
    }
    return (
        <img src={img2} style={style}/>
        )


}
export default Player