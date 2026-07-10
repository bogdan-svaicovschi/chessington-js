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
            const position1: Square = Square.at(i, position.col);
            if (board.getPiece(position1)) {
                break;
            }
            result.push(position1);
        }

        for (let i = position.row - 1; i >= 0; i--) {
            const position1: Square = Square.at(i, position.col);
            if (board.getPiece(position1)) {
                break;
            }
            result.push(position1);
        }

        for (let i = position.col + 1; i < 8; i++) {
            const position1: Square = Square.at(position.row, i);
            if (board.getPiece(position1)) {
                break;
            }
            result.push(position1);
        }

        for (let i = position.col - 1; i >= 0; i--) {
            const position1: Square = Square.at(position.row, i);
            if (board.getPiece(position1)) {
                break;
            }
            result.push(position1);
        }

        return result;
        
    }
}
