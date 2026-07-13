import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Knight extends Piece {

    private POSLIST: number[] = [1, 1, -1, -1, 2, -2, 2, -2];
    private LENGTH: number = 7;

    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const result: Array<Square> = new Array;
        const position: Square = board.findPiece(this);

        for (let i = 0; i < 8; i ++) {
            const futurePosition: Square = Square.at(position.row + this.POSLIST[i], position.col + this.POSLIST[this.LENGTH - i]);
            if (this.checkConditions(board, futurePosition)) {
                result.push(futurePosition);
            } else if (this.checkIfTakeable(board, futurePosition)) {
                result.push(futurePosition);
            }
            
        }

        return result;
    }

    public type() {
        return "Knight";
    }
}
