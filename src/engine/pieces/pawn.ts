import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {

    private ONEJUMP: number = 1;
    private TWOJUMP: number = 2;
    private NEGATIVE: number = -1;
    private POSITIVE: number = 1;
    private DIRECTION: number;
    private startRow: number;


    public constructor(player: Player) {
        super(player);
        if (player == Player.WHITE) {
            this.DIRECTION = 1;
            this.startRow = 1;
        } else {
           this.DIRECTION = -1; 
           this.startRow = 6;
        }
    }

    public getAvailableMoves(board: Board) {

        const position : Square = board.findPiece(this);
        const result : Array<Square> = new Array;
        const oneJumpPosition: Square = Square.at(position.row + this.DIRECTION * this.ONEJUMP, position.col);
        const twoJumpPosition: Square = Square.at(position.row + this.DIRECTION * this.TWOJUMP, position.col);
        const firstTakePosition: Square = Square.at(position.row + this.DIRECTION * this.ONEJUMP, position.col + this.POSITIVE);
        const secondTakePosition: Square = Square.at(position.row + this.DIRECTION * this.ONEJUMP, position.col + this.NEGATIVE);

        if (this.checkPossiblePosition(board, oneJumpPosition)) {
            result.push(oneJumpPosition);

            if (position.row == this.startRow && this.checkPossiblePosition(board, twoJumpPosition)) {
                result.push(twoJumpPosition);
            }
        }

        if (this.checkPossibleTake(board, firstTakePosition)) {
            result.push(firstTakePosition);
        }

        if (this.checkPossibleTake(board, secondTakePosition)) {
            result.push(secondTakePosition);
        }
 
        return result;
    }

    public type() {
        return "Pawn";
    }
}
