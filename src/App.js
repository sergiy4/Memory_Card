
import './App.css';
import { useState,useEffect } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import StartScreen from './components/StartScreen';
function App() {

  const [currentScore,setCurrentScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  const [startScreen,setStartScreen] = useState(true)
  
  const increaseCurrentScore = () =>{
    setCurrentScore(prevScore => prevScore+1)
  }

  const increaseBeastScore = () =>{
    setBestScore(prevScore => prevScore+1)
  }

  const resetCurrentScore = () =>{
    setCurrentScore(0)
  }

  if(startScreen){
    return(
      <StartScreen startBtn={()=>{setStartScreen(false)}}></StartScreen>
    )
  }else{
    return(
      <div className='screen'>
      <Header currentScore={currentScore} bestScore={bestScore}></Header>
    
      <Cards increaseScore={increaseCurrentScore}
      increaseBeastScore={increaseBeastScore}
      resetCurrentScore={resetCurrentScore}
      bestScore={bestScore}
      currentScore={currentScore} ></Cards>
    </div>
    )
    
  }
  // return (
  //   {if(startScreen){
      
  //   }
  //   else{
  //     return(

  //     )
  //   }}
   
  
  // );
}

export default App;
