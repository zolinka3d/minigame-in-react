import "./App.css";
import {useState,useEffect, useRef} from "react";
import ziomek from './img/ziomek2.png';
import { GameBox } from "./components/GameBox";
import { Man } from "./components/Man";
import { Block } from "./components/Block";
import { useContext } from 'react';
import ContextApi from "./context/Feedback";
import { GameBoxValues, BlockValues, x, blocksValues, ManValues } from "./values/values";


const blocksPositions = [blocksValues.blok1.position,blocksValues.blok2.position,blocksValues.blok3.position,blocksValues.blok4.position];

function App() {
  

  const { manPosition, setBlockPosition,
    blockPosition , setManPosition,
    gameHasStarted, setGameHasStarted,
    blok1, setBlok1,
    blok2, setBlok2,
    blok3, setBlok3,
    blok4, setBlok4,
    manDirection, setManDirection,
    score, setScore,
    positionOfCorrectBlock, setPositionOfCorrectBlock } = useContext(ContextApi);

  useEffect(() => {
    let id = Math.floor(Math.random() * 4);
    console.log(id)
    setPositionOfCorrectBlock(blocksPositions[id]);
    console.log("pozycja",positionOfCorrectBlock)
    if (id===0)      {setBlok1(true); setBlok2(false); setBlok3(false); setBlok4(false);}
    else if (id===1) {setBlok2(true); setBlok1(false); setBlok3(false); setBlok4(false);}
    else if (id===2) {setBlok3(true); setBlok1(false); setBlok2(false); setBlok4(false);}
    else if (id===3) {setBlok4(true); setBlok1(false); setBlok2(false); setBlok3(false);}
  },[score, positionOfCorrectBlock])

const checkingCorrectPosition = (positionOfCorrectBlock) => {
  if((manPosition+50 > positionOfCorrectBlock) && (positionOfCorrectBlock+30 > manPosition)) return true;
  else return false
} 

  const handleKeyDown = (event) => {
    //console.log('User pressed: ', event.key);
    switch(event.key){
      case 'd':
        if(manPosition < (GameBoxValues.width - ManValues.fullwidth/4 ))
          {setManPosition(manPosition + 10);}
        setManDirection("prawo");
        setGameHasStarted(true)
        break;
      case 'a':
        if(manPosition > 0){
          setManPosition(manPosition - 10);  
        }
        setManDirection("lewo");
        setGameHasStarted(true)
        break;
        case 's':
          setManDirection("tyl");
          setGameHasStarted(true)
          break;
          case 'w':
            setManDirection("przod");
            setGameHasStarted(true)
            break;
      default:
        break;
    }
  }

  useEffect(() => {
    let BlockId;
    if((blockPosition < GameBoxValues.height) && gameHasStarted){
      BlockId = setInterval(() => {
        setBlockPosition(blockPosition + 5);
        //console.log("cos")
      }, 24)
      return () => {
        clearInterval(BlockId)
      }
    } else {
      setBlockPosition(0);
    }

    if((blockPosition > (GameBoxValues.height-1)) && checkingCorrectPosition(positionOfCorrectBlock) === true ){
      //console.log(score)
      setScore((score) => score+1)
      //console.log(score)
    } else if((blockPosition > (GameBoxValues.height-1)) && checkingCorrectPosition(positionOfCorrectBlock) === false ){
      setScore((score) => score-1)
    }

  },[blockPosition, gameHasStarted, score, positionOfCorrectBlock])

  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);


  return (
    <>
    <div ref={ref} onKeyDown={handleKeyDown} tabIndex={-1} className="App">
    
      <GameBox height={GameBoxValues.height} width={GameBoxValues.width}>
        <Block left={blocksValues.blok1.position} width={BlockValues.width} top={blockPosition}  boolean={blok1}/>
        <Block left={blocksValues.blok2.position} width={BlockValues.width} top={blockPosition} boolean={blok2}/>
        <Block left={blocksValues.blok3.position} width={BlockValues.width} top={blockPosition} boolean={blok3}/>
        <Block left={blocksValues.blok4.position} width={BlockValues.width} top={blockPosition} boolean={blok4}/>
        <Man src={ziomek} top={GameBoxValues.height - ManValues.height} width={ManValues.fullwidth} left={manPosition} direction={manDirection} />
      </GameBox>
    </div>
    <div className="score">score: {score}</div>
    </>
  );
}

export default App;
