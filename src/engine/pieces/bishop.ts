import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {

    private NEGATIVE: number = -1;
    private POSITIVE: number = 1;


    public constructor(player: Player) {
        super(player);
    }


    private iterateBishopLoop(board:Board, position:Square, rowModifier:number, colModifier:number) {
        const result : Array<Square> = new Array;
        let futurePosition: Square = Square.at(position.row + rowModifier, position.col + colModifier);
        
        while (this.checkConditions(board,futurePosition)) {
            result.push(futurePosition);
            futurePosition = Square.at(futurePosition.row + rowModifier, futurePosition.col + colModifier);
        }

        if (this.checkIfLegal(futurePosition)) {
            const piece:Piece | undefined = board.getPiece(futurePosition);
            if (piece?.player != this.player && piece?.type() != "King") {
                result.push(futurePosition);
            }
            
        }

        return result;
    }
        

    public getAvailableMoves(board: Board) {
        const position: Square = board.findPiece(this);
        const result : Array<Square> = new Array;

        result.push.apply(result, this.iterateBishopLoop(board, position, this.POSITIVE, this.NEGATIVE));
        result.push.apply(result, this.iterateBishopLoop(board, position, this.POSITIVE, this.POSITIVE));
        result.push.apply(result, this.iterateBishopLoop(board, position, this.NEGATIVE, this.NEGATIVE));
        result.push.apply(result, this.iterateBishopLoop(board, position, this.NEGATIVE, this.POSITIVE));

        return result;

    }

    public type() {
        return "Bishop";
    }
}
