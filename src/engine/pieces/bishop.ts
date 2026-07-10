import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
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
        const result : Array<Square> = new Array;

        for (let i = 1; i < 8; i++) {
            const row: number = position.row + i;
            const col: number = position.col - i;
            const position1 = Square.at(row, col);
            if (!this.checkIfLegal(row, col)) {
                break;
            }
            if (board.getPiece(position1)) {
                break;
            }
            result.push(position1);
        }

        for (let i = 1; i < 8; i++) {
            const row: number = position.row + i;
            const col: number = position.col + i;
            const position1 = Square.at(row, col);
            if (!this.checkIfLegal(row, col)) {
                break;
            }
            if (board.getPiece(position1)) {
                break;
            }
            result.push(position1);
        }

        for (let i = 1; i < 8; i++) {
            const row: number = position.row - i;
            const col: number = position.col - i;
            const position1 = Square.at(row, col);
            if (!this.checkIfLegal(row, col)) {
                break;
            }
            if (board.getPiece(position1)) {
                break;
            }
            result.push(position1);
        }

        for (let i = 1; i < 8; i++) {
            const row: number = position.row - i;
            const col: number = position.col + i;
            const position1 = Square.at(row, col);
            if (!this.checkIfLegal(row, col)) {
                break;
            }
            if (board.getPiece(position1)) {
                break;
            }
            result.push(position1);
        }

        return result;
    }
}
