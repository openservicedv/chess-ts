import React, {useState, useRef, useEffect} from 'react';
import {Chess} from 'chess.js';
import {createBoard} from "../../functions/create-board";
import {Board} from "../../components/board/Board";

const FEN = 'rnbqkbnr/pp1ppppp/2p5/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
const Game = () => {
    const [fen, setFen] = useState(FEN);
    const {current: chess} = useRef(new Chess(fen));
    const [board, setBoard] = useState(createBoard(fen))

    useEffect(() => {
        console.log(board)
        console.log(chess)
        createBoard(fen)
    }, [fen]);

    return (
        <div>
            <Board
                board={board}
            />
        </div>
    )
};

export default Game;
