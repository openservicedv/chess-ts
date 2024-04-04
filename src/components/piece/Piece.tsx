import {FC} from "react";
import './piece-styles.css'

interface IPiece {
    piece: string
}

export const Piece: FC<IPiece> = ({piece}) => {
    const image = require('../../assets/pieces/bB.png')
    return (
        <img
            className='piece'
            src={image} alt=''/>
    )
}
