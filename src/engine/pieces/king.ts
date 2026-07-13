import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {

    private POSITIONMODIFIERS: number[] = [-1, 0, 1];

    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const position: Square = board.findPiece(this);
        const result: Array<Square> = new Array;


        for (let i = 0; i < this.POSITIONMODIFIERS.length; i++) {
            for (let j = 0; j < this.POSITIONMODIFIERS.length; j++) {
                const futurePosition: Square = Square.at(position.row + this.POSITIONMODIFIERS[i], position.col + this.POSITIONMODIFIERS[j]);
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
