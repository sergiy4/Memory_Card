import {useState, useEffect} from "react"

function Header (props){

    const {currentScore,bestScore} = props
  
 

    return(
        <header className="game_header">
             <h1 className="Text_memory">Memory game</h1>
            <div className="Score">
            
                <p>Score: {currentScore}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </header>
    )
}

export default Header;