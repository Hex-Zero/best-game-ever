import * as React from "react";

interface IGameRoomProps {}

const GameRoom: React.FunctionComponent<IGameRoomProps> = (props) => {
  return (
    <div className="bge-board-container">
      <div className="bge-grid-cell"></div>
      <div className="bge-grid-cell"></div>
      <div className="bge-grid-cell"></div>
      <div className="bge-grid-cell"></div>
      <div className="bge-grid-cell"></div>
      <div className="bge-grid-cell"></div>
      <div className="bge-grid-cell"></div>
      <div className="bge-grid-cell"></div>
      <div className="bge-grid-cell"></div>
    </div>
  );
};

export default GameRoom;
