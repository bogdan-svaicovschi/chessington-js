import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;
    protected move: number;

    public constructor(player: Player) {
        this.player = player;
        this.move = 0;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    public setMove(x : number) {
        this.move = x;
    }

    public getMove() {
        return this.move;
    }
}
