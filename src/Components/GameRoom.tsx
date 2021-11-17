import * as React from "react";
import * as _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import xSign from "../Assets/x-sign.svg";
import oSign from "../Assets/o-sign.svg";

interface IGameRoomProps {
  
}

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
    const squares = boardState.squares;
    squares[gridIndex].value = boardState.playerTurn ? 1 : 2;
    squares[gridIndex].isEnabled = false;
    setBoardState({
      squares,
      playerTurn: !boardState.playerTurn,
    });
  };

  console.log(require("../Assets/x-sign.svg"));

  return (
    <div className="bge-board-container">
      {boardState.squares.map((square, index) => (
        <div
          key={uuidv4()}
          onClick={square.isEnabled ? () => handleClick(index) : () => {}}
          className="bge-grid-cell bge-x-simbol"
        >
          {square.value === 1 ? (
            <img src={xSign} alt="x-sign" />
          ) : square.value === 2 ? (
            <img src={oSign} alt="o-sign" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default GameRoom;
