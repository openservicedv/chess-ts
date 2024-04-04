import {FC} from "react";
import {Cell, ICell} from "../cell/Cell";

interface IBoard {
    board: ICell[]
}
export const Board: FC<IBoard> = ({board}) => {
    console.log(board)
    return (
        <div className='board'>
            {board.map((el, index) => (
                <Cell
                    key={index}
                    pos={el.pos}
                    piece={el.piece}
                />
            ))}
        </div>
    );
};
