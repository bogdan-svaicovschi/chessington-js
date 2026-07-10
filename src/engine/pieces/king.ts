import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private checkIfLegal(row: number, col: number) {
        if (row < 0 || row > 7 || col < 0 || col > 7) {
            return false;
        }

        return true;
    }

    public getAvailableMoves(board: Board) {
        const position: Square = board.findPiece(this);
        const result: Array<Square> = new Array;
        const col: number = position.col - 1;
        const row: number = position.row - 1;


        for (let i = 0; i < 3; i++) {
            const newRow = row + i;
            for (let j = 0; j < 3; j++) {
                const newCol = col + j;
                if (this.checkIfLegal(newRow, newCol)) {
                    const pos1:Square = Square.at(newRow, newCol);
                    if (!board.getPiece(pos1)) {
                        result.push(pos1);
                    }
                }
            }
        }

        return result;

    }
}
