import React, { createContext, useState } from 'react';

const ContextApi = createContext();

export function FeedbackProvider({ children }) {

    const GameBoxWidth = 500;
    const BlockWidth = 30;
    const x = (GameBoxWidth-4*BlockWidth)/3;
    const blok1Position = 0;
    const blok2Position = BlockWidth+x;
    const blok3Position = 2*BlockWidth+2*x
    const blok4Position = 3*BlockWidth+3*x

const blocksPositions = [blok1Position,blok2Position,blok3Position,blok4Position];

    const [manPosition,setManPosition] = useState(0);
    const [blockPosition, setBlockPosition] = useState(0);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const [blok1, setBlok1] = useState(false);
    const [blok2, setBlok2] = useState(false);
    const [blok3, setBlok3] = useState(false);
    const [blok4, setBlok4] = useState(false);
    const [manDirection, setManDirection] = useState("przod");
    const [score, setScore] = useState(0);
    const [positionOfCorrectBlock, setPositionOfCorrectBlock] = useState(blok2Position);

    return (
        <ContextApi.Provider
          value={{
            manPosition, setBlockPosition,
            blockPosition , setManPosition,
            gameHasStarted, setGameHasStarted,
            blok1, setBlok1,
            blok2, setBlok2,
            blok3, setBlok3,
            blok4, setBlok4,
            manDirection, setManDirection,
            score, setScore,
            positionOfCorrectBlock, setPositionOfCorrectBlock
          }}
        >
          {children}
        </ContextApi.Provider>
      );
}

export default ContextApi;