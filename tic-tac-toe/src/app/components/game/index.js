import React, { Component } from 'react';

import Board from '../board';
import { lines } from '../../../constants';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  };

  calculateWinner = squares => {
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = i => {
    const history = [...this.state.history];
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (this.calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };

  stepNumber = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={moves}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
