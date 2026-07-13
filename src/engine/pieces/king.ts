import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const position: Square = board.findPiece(this);
        const result: Array<Square> = new Array;
        const col: number = position.col - 1;
        const row: number = position.row - 1;


        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const futurePosition: Square = Square.at(row + i, col + j);
                if (this.checkPossiblePosition(board, futurePosition)) {
                    result.push(futurePosition);
                } else if (this.checkPossibleTake(board, futurePosition)) {
                    result.push(futurePosition);
                }
            }
        }
        return result;
    }

    public type() {
        return "King";
    }
}
