import '../styles/StartScreen.css'

import Typewriter from 'typewriter-effect';
function StartScreen(props){

    const {startBtn} = props
    return(
        <>
            <header className="Start_header">
                <h1 className='header'>Memory Game</h1>
            </header>
            <main className="rules">
                <div className='rules_block'>
              
                <Typewriter
                style={{color:'#aaaa'}}
                options={{delay:22}}
                 onInit={(typewriter) => {
                    typewriter.typeString(" <h3 class='rule_h2'>Rule: </h3> <br> 1. The game starts with 4 cards <br><br>2. You have to click on one of them<br><br> 3. After that the cards are shuffled <br><br> 4. You must not click on the same card twice <br><br>5. When you click on all the cards, <br/>another one is added and you go to the next level")
                      .callFunction(() => {
                        console.log('String typed out!');
                      })
                      .start();
                  }}
                 
                />
                </div>
                <button onClick={startBtn} className="start_btn">Start</button>
            </main>
            
            
        </>
    )
}

export default StartScreen