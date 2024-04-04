import {FC} from "react";
import './piece-styles.css'

interface IPiece {
    piece: string
}

export const Piece: FC<IPiece> = ({piece}) => {
    const fileName = piece.toUpperCase() === piece ? `w${piece}` : `b${piece.toUpperCase()}`
    let image;
    try {
        image = require(`../../assets/pieces/${fileName}.png`);
    } catch (e) {
        image = require(`../../assets/pieces/empty.png`);
    }

    return (
        <img
            className='piece'
            src={image}
            alt=''
            draggable={true}
        />
    )
}
