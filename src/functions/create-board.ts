export class Cell {
    pos: string
    piece: string

    constructor(pos: string, piece: string) {
        this.pos = pos
        this.piece = piece

    }
}

export const createBoard = (fenString: string) => {
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const row = ['8', '7', '6', '5', '4', '3', '2', '1']
    // console.log(columns)
    const board = fenString
        .split(' ')[0]
        .split('/')
        .map(el => [el.split('')
            .map(item => Number(item) ? Array.from({length: Number(item)}, (x) => "") : item)]
            .flat()
            .flat())
        .map((el, i) => el.map((item, index) => new Cell(col[index]+row[i], item)))
    console.log(board)
    return board
}

