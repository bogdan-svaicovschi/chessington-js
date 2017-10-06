import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {

    private ONEJUMP: number = 1;
    private TWOJUMP: number = 2;
    private EXPONENTIAL: number;
    private startRow: number;


    public constructor(player: Player) {
        super(player);
        if (player == Player.WHITE) {
            this.EXPONENTIAL = 1;
            this.startRow = 1;
        } else {
           this.EXPONENTIAL = -1; 
           this.startRow = 6;
        }
    }

    public getAvailableMoves(board: Board) {
        const position : Square = board.findPiece(this);
        const result : Array<Square> = new Array;
        const position1: Square = Square.at(position.row + this.EXPONENTIAL * this.ONEJUMP, position.col);
        const position2: Square = Square.at(position.row + this.EXPONENTIAL * this.TWOJUMP, position.col);

        if (!board.getPiece(position1)) {
            result.push(position1);

            if (position.row == this.startRow && !board.getPiece(position2)) {
                result.push(position2);
            }
        }

        

        return result;
    }
}
