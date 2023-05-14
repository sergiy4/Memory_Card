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

    useEffect(()=>{

        setData()
        
    },[loss])

    useEffect(()=>{
        setData()

    },[level])

    const  setData = () =>{

        let namesArr = ["Dipper","Mabel","Wendy","Stanley","Pig","Soos","Deputy","Pacifica","Bill"]
        let newArr = []
        // межі масива

        if(level+4 <= namesArr.length){
            for(let i = 0; i< level+4; i++){
            
                newArr.push({
                    id:uniqid(),
                    elect:false,
                    name:namesArr[i]
                })
            }
        }else{
            for(let i = 0; i< namesArr.length; i++){
            
                newArr.push({
                    id:uniqid(),
                    elect:false,
                    name:namesArr[i]
                })
            }
        }
        
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
        setLoss(!loss)
        
        // reset Score
        resetCurrentScore()
        // Запускає анімацію програшу

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

        // setCards(newArr)

        // increment current Score
        increaseScore()  

        // increment Best Score
        if(currentScore>=bestScore){
            increaseBeastScore()
        }


        // check win
        if(checkWin(newArr)){
            // next level
            setLevel(prevLevel => prevLevel+1)
           
        }

        // setCard
        setCards(newArr)
    }

    return(
        
        <main className="cards">
        
        {cards.map(item => {
           
            return(
                
                <Card key={item.id} oneCard={item} ClickCard = {chooseCard} ></Card>
            )
        })}
   
        </main>
      
    )

}

export default Cards