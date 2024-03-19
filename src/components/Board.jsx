import { Square } from "./Square"


export function GameBoard({ board, updateBoard }) {
    return (
        board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))

    );
  }