import {FC} from "react";

export interface ICell {
    pos: string,
    piece: string
}

export const Cell: FC<ICell> = ({pos, piece}) => {
    // console.log(pos)
    return (
        <div>
            {pos}, {piece}
        </div>
    );
}
