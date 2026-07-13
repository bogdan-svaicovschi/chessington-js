import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {

    private COLMODIFIERS: number[] = [1, -1, 0, 0];
    private ROWMODIFIERS: number[] = [0, 0, 1, -1];


    public constructor(player: Player) {
        super(player);
    }

    private iterateRookLoop(board: Board, position: Square, rowModifier:number, colModifier:number ){
        const result : Array<Square> = new Array;
        let futurePosition: Square = Square.at(position.row + rowModifier, position.col + colModifier);

        while(this.checkConditions(board, futurePosition)) {
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
        for (let i = 0; i < this.COLMODIFIERS.length; i++) {
            result.push.apply(result, this.iterateRookLoop(board, position, this.COLMODIFIERS[i], this.ROWMODIFIERS[i]));
        }

        return result;
        
    }

    public type() {
        return "Rook";
    }
}
