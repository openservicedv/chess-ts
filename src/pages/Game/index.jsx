import React, {useState, useRef} from 'react';
import {Chess} from 'chess.js';
import {createBoard} from "../../functions/create-board";

// const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
const FEN = 'rnbqkbnr/pppppppp/8/8/3P4/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
const Game = () => {
    const [fen, setFen] = useState(FEN);
    const {current: chess} = useRef(new Chess(fen));

    createBoard(FEN)

    return (
        <div>
            fsd
        </div>
    )
};

export default Game;
