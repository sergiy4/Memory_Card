
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

  const levelOne = () =>{
    const levelScreen = document.getElementById('over')
    const allScreenStart = document.querySelector('.all_start_screen')

    levelScreen.className='overWindow'
    const h1 = document.createElement('h1')
    h1.innerText='Start Game'
    h1.className = 'level_one'
    
    setTimeout(()=>{
      allScreenStart.appendChild(h1)
     
    },750)

    setTimeout(()=>{
      allScreenStart.removeChild(h1)
      setStartScreen(false)
    },1700)

    setTimeout(()=>{
      levelScreen.classList.remove('overWindow')
    },2600)

    
  }


  return(
    <>
    <div className='all_start_screen'>
      <div id='over'>
       
      </div>
      {startScreen && (
     
      
        <StartScreen startBtn={()=>{levelOne()}}></StartScreen>
     
      
     
      )}
      {!startScreen && (
       <div className='screen'>
       <Header currentScore={currentScore} bestScore={bestScore}></Header>
     
       <Cards increaseScore={increaseCurrentScore}
       increaseBeastScore={increaseBeastScore}
       resetCurrentScore={resetCurrentScore}
   
       currentScore={currentScore} 
       bestScore={bestScore}></Cards>
       
       </div>
     )}
    </div>
     
    </>
  )
  

}

export default App;
