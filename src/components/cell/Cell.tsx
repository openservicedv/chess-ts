import {FC} from "react";
import './cell-styles.css';
import {Piece} from "../piece/Piece";

export interface ICell {
    index: number;
    pos: string;
    piece: string;
    makeMove: (pos: string) => void
    setFromPos: (pos: string) => void
}

export const Cell: FC<ICell> = ({index, pos, piece, makeMove, setFromPos}) => {
    // console.log(pos)
    return (
        <div
            className={`cell ${(Number(pos[1]) % 2 === 0 && index % 2 === 0) ||
            (Number(pos[1]) % 2 !== 0 && index % 2 !== 0) ? 'white' : 'black'}`}
            onDrop={() => makeMove(pos)}
            onDragOver={(e) => e.preventDefault()}
        >
            <Piece
                pos={pos}
                piece={piece}
                setFromPos={setFromPos}
            />
        </div>
    );
}
