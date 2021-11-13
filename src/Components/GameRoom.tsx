import * as React from "react";
import * as _ from "lodash";

interface IGameRoomProps {}

interface ISquareState {
  value: number;
  isEnabled: boolean;
}

interface IBoardState {
  squares: ISquareState[];
  playerTurn: boolean;
}

const emptyBoard: ISquareState[] = _.times(9, () => ({
  value: 0,
  isEnabled: true,
}));

const GameRoom: React.FunctionComponent<IGameRoomProps> = (props) => {
  const [boardState, setBoardState] = React.useState<IBoardState>({
    squares: emptyBoard,
    playerTurn: true,
  });

  const handleClick = (gridIndex: number) => {
    console.log(boardState);
    const squares = boardState.squares;
    squares[gridIndex].value = boardState.playerTurn ? 1 : 2;
    squares[gridIndex].isEnabled = false;
    setBoardState({
      squares,
      playerTurn: !boardState.playerTurn,
    });
  };

  return (
    <div className="bge-board-container">
      {boardState.squares.map((square, index) => (
        <div
          onClick={square.isEnabled ? () => handleClick(index) : () => {}}
          className="bge-grid-cell"
        >
          {square.value ? square.value : null}
        </div>
      ))}
    </div>
  );
};

export default GameRoom;
