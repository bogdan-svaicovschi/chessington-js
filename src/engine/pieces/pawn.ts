import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {

    private ONEJUMP: Number = 1;
    private TWOJUMP: Number = 2;
    private EXPONENTIAL: Number;

    public constructor(player: Player) {
        super(player);
        if (player == Player.WHITE) {
            this.EXPONENTIAL = 1;
        } else {
           this.EXPONENTIAL = -1; 
        }
    }

    public getAvailableMoves(board: Board) {
        const position : Square = board.findPiece(this);
        const result : Array<Square> = new Array;

        
    }
}
