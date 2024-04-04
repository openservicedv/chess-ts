export const createBoard = (fenString: string) => {
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['8', '7', '6', '5', '4', '3', '2', '1'];
    const board: any = fenString
        .split(' ')[0]
        .split('/')
        .map(el => [el.split('')
            .map(item => Number(item)
                ? Array.from({length: Number(item)}, (x) => "")
                : item
            )]
            .flat()
            .flat()
        )

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = {pos: col[j] + row[i], piece: board[i][j]}
        }
    }
    return board.flat();
};
