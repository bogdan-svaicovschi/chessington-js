import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Queen extends Piece {

    private NEGATIVE: number = -1;
    private POSITIVE: number = 1;

    private COLMODIFIERS: number[] = [1, -1, 0, 0];
    private ROWMODIFIERS: number[] = [0, 0, 1, -1];

    public constructor(player: Player) {
        super(player);
    }

    private iterateRookLoop(board: Board, position: Square, rowModifier:number, colModifier:number ){
        const result : Array<Square> = new Array;
        let futurePosition: Square = Square.at(position.row + rowModifier, position.col + colModifier)

        while(this.checkConditions(board, futurePosition)) {
            result.push(futurePosition);
            futurePosition = Square.at(futurePosition.row + rowModifier, futurePosition.col + colModifier)
        }

        if (this.checkIfTakeable(board, futurePosition)) {
            result.push(futurePosition);
        }

        return result;
    }

    private checkLateral(board: Board) {
        const position: Square = board.findPiece(this);
        const result : Array<Square> = new Array;
        for (let i = 0; i < this.COLMODIFIERS.length; i++) {
            result.push.apply(result, this.iterateRookLoop(board, position, this.COLMODIFIERS[i], this.ROWMODIFIERS[i]));
        }

        return result;
    }


    private iterateBishopLoop(board:Board, position:Square, rowModifier:number, colModifier:number) {
        const result : Array<Square> = new Array;
        let futurePosition: Square = Square.at(position.row + rowModifier, position.col + colModifier);
        
        while (this.checkConditions(board,futurePosition)) {
            result.push(futurePosition);
            futurePosition = Square.at(futurePosition.row + rowModifier, futurePosition.col + colModifier);
        }

        if (this.checkIfTakeable(board, futurePosition)) {
            result.push(futurePosition);
        }

        return result;
    }

    

    private checkDiagonally(board: Board) {
        const position: Square = board.findPiece(this);
        const result : Array<Square> = new Array;

        result.push.apply(result, this.iterateBishopLoop(board, position, this.POSITIVE, this.NEGATIVE));
        result.push.apply(result, this.iterateBishopLoop(board, position, this.POSITIVE, this.POSITIVE));
        result.push.apply(result, this.iterateBishopLoop(board, position, this.NEGATIVE, this.NEGATIVE));
        result.push.apply(result, this.iterateBishopLoop(board, position, this.NEGATIVE, this.POSITIVE));

        return result;
    }

    public getAvailableMoves(board: Board) {
        const result: Array<Square> = new Array;

        result.push.apply(result, this.checkDiagonally(board));
        result.push.apply(result, this.checkLateral(board));

        return result;
    }

    public type() {
        return "Queen";
    }
}
