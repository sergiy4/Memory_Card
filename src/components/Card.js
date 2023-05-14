import { useState,useEffect } from "react";
import Tilt  from 'react-parallax-tilt';

function Card(props){
   
    const card = props.oneCard
   
    return(
        <Tilt glareEnable={true} glareMaxOpacity={0.5} glareColor="#ffffff" glarePosition="bottom" >
        <div className="card" id='card' onClick={()=>props.ClickCard(card.id)} >
           
            <img className="img" src={require( `../img/${card.name}.jpg`)} ></img>
            <p>{card.name}</p>
           
        </div>
        </Tilt>
    )
}
// glareEnable={true}
// glareMaxOpacity={0.45}
export default Card