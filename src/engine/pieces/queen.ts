import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private checkLateral(board: Board) {
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

    private checkIfLegal(row: number, col: number) {
        if (row < 0 || row > 7 || col < 0 || col > 7) {
            return false;
        }

        return true;
    }

    private checkDiagonally(board: Board) {
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

    public getAvailableMoves(board: Board) {
        const result: Array<Square> = new Array;

        result.push.apply(result, this.checkDiagonally(board));
        result.push.apply(result, this.checkLateral(board));

        return result;
    }
}
