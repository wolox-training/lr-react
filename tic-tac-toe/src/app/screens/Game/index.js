import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '../Game/components/Board';
//import { lines } from '../../../constants';
import getBookDetail from '../../../services/BookService';
import { clickprueba } from '../../../Game/actions';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }]
  };

  calculateWinner = squares => {
    console.log(getBookDetail);
    for (let i = 0; i < getBookDetail.length; i += 1) {
      const [a, b, c] = getBookDetail[i];
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
    this.props.dispatch(clickprueba(history.length));
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
    this.props.dispatch(clickprueba(step));
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

const mapStateToProps = state => ({
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});

Game.propTypes = {
  xIsNext: PropTypes.bool,
  stepNumber: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Game);
