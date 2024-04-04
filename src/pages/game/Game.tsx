import React, {useState, useRef, useEffect, FC} from 'react';
import {Chess} from 'chess.js';
import './game-styles.css'
import {createBoard} from "../../functions/create-board";
import {Board} from "../../components/board/Board";
import {ICell} from "../../components/cell/Cell";

const FEN: string = 'rnbqkbnr/pp1ppppp/2p5/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
export const Game: FC<{}> = () => {
    const [fen, setFen] = useState<string>(FEN);
    const {current: chess} = useRef<Chess>(new Chess(fen));
    const [board, setBoard] = useState<ICell[]>(createBoard(fen))

    const fromPos = useRef<string>('')

    const makeMove = (pos: string) => {
        console.log(pos, ' получили клетку Получатель')
        chess.move({from: fromPos.current, to: pos})
        setFen(chess.fen())
    }

    const setFromPos = (pos: string) => {
        console.log(pos, ' получили клетку Отправитель')
        fromPos.current = pos
    }

    useEffect(() => {
        // console.log(board)
        // console.log(chess)
        // createBoard(fen)
    }, [fen]);

    return (
        <div className='container'>
            <Board
                board={board}
                makeMove={makeMove}
                setFromPos={setFromPos}
            />
        </div>
    )
};
