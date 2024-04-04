import {FC} from "react";
import './board-styles.css'
import {Cell, ICell} from "../cell/Cell";

export interface IBoard {
    board: ICell[]
    makeMove: (pos: string) => void
    setFromPos: (pos: string) => void
}

export const Board: FC<IBoard> = ({board, ...props}) => {
    console.log(board)
    return (
        <div className='board'>
            {board.map((cell, index) => (
                <Cell
                    key={index}
                    index={index}
                    pos={cell.pos}
                    piece={cell.piece}
                    {...props}
                />
            ))}
        </div>
    );
};
