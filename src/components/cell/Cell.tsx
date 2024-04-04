import {FC} from "react";
import './cell-styles.css';

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
           {piece}
        </div>
    );
}
