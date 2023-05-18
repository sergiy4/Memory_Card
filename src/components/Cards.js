import { useState,useEffect } from "react";
import uniqid from "uniqid"
import Card from "./Card";
import shuffle from "../function/shuffle";
import checkWin from "../function/checkWin";

function Cards (props){
    
    const {currentScore, bestScore,increaseScore,increaseBeastScore,resetCurrentScore} = props
    const [cards,setCards] = useState([])
    const [level,setLevel] = useState(0)
    const [loss,setLoss] = useState(false)
    const [victory,setVictory] = useState(false)
    const [nextLevel,setNextLevel] = useState(true)


    useEffect(()=>{

        setData()
        
    },[victory,loss,level])

    const  setData = () =>{

        let namesArr = ["Dipper","Mabel","Wendy","Stanley","Pig","Soos","Deputy","Pacifica","Bill"]
        let newArr = []
        // межі масива

        if(level+5 > namesArr.length){
            setNextLevel(false)
        }

        if(level+4 <= namesArr.length){
            for(let i = 0; i< level+4; i++){
            
                newArr.push({
                    id:uniqid(),
                    elect:false,
                    name:namesArr[i]
                })
            }
        }
        
        newArr = shuffle(newArr)

        
       setCards(newArr)
    }
    
    const chooseCard = (id) =>{
        // checkWin(cards)
       
        cards.forEach(item =>{
            if(item.id === id){
                item.elect ? lost() : win(id)
            }
        })
       
    }

    const lost = () =>{
       
        setLevel(0)
        setLoss(true)
        
        // reset Score
        resetCurrentScore()
        

    }

    const win = (id) =>{
     
        // change elect properties
        let newArr = cards.map(item =>{
            if(item.id === id){
                return {
                    id: item.id,
                    elect:true,
                    name:item.name
                }
            }
            else{
                return item
            }
        })
      
        // shuffle array
        newArr = shuffle(newArr)

        // increment current Score
        increaseScore()  

        // increment Best Score
        if(currentScore>=bestScore){
            increaseBeastScore()
        }

        // check win
        if(checkWin(newArr)){
            // next level
           
            setVictory(true)
        
        }
        
        // setCard
        setCards(newArr)
    }

    return(
        
        <main className="cards">
        {loss && (
            <div className="loseModal">
                <h1>You lost</h1>
                <button className="restartBtn" onClick={()=>{setLoss(false) 
                        setLevel(0)}}>Restart</button>
            </div>
        )}
        {victory && (

          <div className="loseModal">
             <h1>You win level :{level +1}</h1>
             
             <div className="buttonDiv">
             <button className="restartBtn" onClick={()=>{
                    setVictory(false)

                    setLevel(0)

                    if(!nextLevel){
                        resetCurrentScore()
                    }
                    }}>Restart</button>

                {nextLevel && (
                    <button className="restartBtn" onClick={()=>{
                        setLevel(prevLevel => prevLevel+1) 
                        setVictory(false)
                        }
                    }>Next level</button>
                )}
             
            </div>
          </div>
        )}
        {!victory && !loss && (
            cards.map(item => {
           
                return(
                    
                    <Card key={item.id} oneCard={item} ClickCard = {chooseCard} ></Card>
                )
            })
        )}
       
        
   
        </main>
      
    )

}

export default Cards