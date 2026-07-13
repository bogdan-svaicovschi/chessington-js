import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;
    protected MAX_VALUE: number = 7;
    protected MIN_VALUE: number = 0;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public type() {
        return "Piece";
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }



    protected checkIfLegal(position: Square) {
        if (position.row < this.MIN_VALUE || position.row > this.MAX_VALUE
            || position.col < this.MIN_VALUE || position.col > this.MAX_VALUE) {
            return false;
        }
    
        return true;
    }



    protected checkConditions(board: Board, position: Square) {

        if (!this.checkIfLegal(position)) {
            return false;
        }

        if (board.getPiece(position)) {
            return false;
        }

        return true;
    }

    protected checkIfTakeable(board: Board, position: Square) {

        if (this.checkIfLegal(position)) {
            const piece:Piece | undefined = board.getPiece(position);
            if (piece?.player != this.player && piece?.type() != "King" && piece) {
                return true;
            } 
        }

        return false;
    }

}
