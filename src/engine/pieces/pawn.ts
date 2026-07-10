import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const position : Square = board.findPiece(this);
        const result : Array<Square> = new Array;

        if (this.player == Player.WHITE)
            result.push(Square.at(position.row + 1, position.col))
        else
            result.push(Square.at(position.row - 1, position.col))

        return result;
    }
}
