import * as React from 'react';

export interface IGameBoardProps {
}



export default class GameBoard extends React.PureComponent<IGameBoardProps> {
  public render() {
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
  }
}
