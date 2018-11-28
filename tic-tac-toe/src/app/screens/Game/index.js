import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '../Game/components/Board';
import { clickStepNumber } from '../../../redux/Game/actions';
import actionCreators from '../../../redux/Win/actions';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    constLine: []
  };

  componentDidMount() {
    this.props.dispatch(actionCreators.getLines());
  }

  calculateWinner = squares => {
    const { constLine } = this.state;
    for (let i = 0; i < constLine.length; i += 1) {
      const [a, b, c] = constLine[i];
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
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...history, { squares }]
    });
    this.props.dispatch(clickStepNumber(history.length));
  };

  jumpTo = step => {
    this.setState({
      xIsNext: step % 2 === 0
    });
    this.props.dispatch(clickStepNumber(step));
  };

  render() {
    const history = this.state.history;
    const current = history[this.props.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={moves}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    const status = winner ? `Winner: ${winner}` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;

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

const mapStateToProps = store => ({
  stepNumber: store.stepNumber,
  xIsNext: store.xIsNext
});

Game.propTypes = {
  xIsNext: PropTypes.bool,
  stepNumber: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Game);
