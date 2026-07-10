import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {


    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const position: Square = board.findPiece(this);
        const result : Array<Square> = new Array;
        for (let i = position.row + 1; i < 8; i++) {
            if (board.getPiece(Square.at(i, position.col))) {
                break;
            }
            result.push(Square.at(i, position.col));
        }

        for (let i = position.row - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(i, position.col))) {
                break;
            }
            result.push(Square.at(i, position.col));
        }

        for (let i = position.col + 1; i < 8; i++) {
            if (board.getPiece(Square.at(position.row, i))) {
                break;
            }
            result.push(Square.at(position.row, i));
        }

        for (let i = position.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(position.row, i))) {
                break;
            }
            result.push(Square.at(position.row, i));
        }

        return result;
        
    }
}
