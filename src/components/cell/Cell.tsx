import {FC} from "react";
import './cell-styles.css';
import {Piece} from "../piece/Piece";

export interface ICell {
    index: number;
    pos: string;
    piece: string;
}

export const Cell: FC<ICell> = ({index, pos, piece}) => {
    // console.log(pos)
    return (
        <div className={`cell ${
            Number(pos[1]) % 2 === 0 && index % 2 === 0 || Number(pos[1]) % 2 !== 0 && index % 2 !== 0
                ? 'white' : 'black'}`}
        >
            <Piece
                piece={piece}
            />
        </div>
    );
}
