import './piece-styles.css'
import React from "react";

interface IPiece {
    pos: string
    piece: string
    setFromPos: (pos: string) => void
}

export const Piece: React.FC<IPiece> = ({pos, piece, setFromPos}) => {
    const fileName = piece.toUpperCase() === piece ? `w${piece}` : `b${piece.toUpperCase()}`
    let image;
    try {
        image = require(`../../assets/pieces/${fileName}.png`);
    } catch (e) {
        image = require(`../../assets/pieces/empty.png`);
    }
    const element: any = React.createRef()
    const handlerOnDragStart = () => {
        setFromPos(pos)
        setTimeout(() => {
            element.current.style.display = 'none'
        }, 0)
    }

    const handlerOnDragEnd = () => {
        // element.current.style.display = 'block'
    }

    return (
        <img
            className='piece'
            src={image}
            alt=''
            ref={element}
            draggable={true}
            onDragStart={handlerOnDragStart}
            onDragEnd={handlerOnDragEnd}
        />
    )
}
