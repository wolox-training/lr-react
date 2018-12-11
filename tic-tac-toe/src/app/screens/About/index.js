import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  AboutGame,
  StrategyTwo,
  StrategyThree,
  StrategyFour,
  StrategyFive,
  StrategySix,
  StrategySeven,
  StrategyEighth,
  StrategyNine
} from './constants';

class About extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="titel-game">History TIC-TAC-TOE</h1>
        <p className="text-game">
          <img
            className="img-game"
            alt="imagen-tic-tac-toe"
            src={'https://thumbs.gfycat.com/PoisedGrippingFox-size_restricted.gif'}
          />
          {AboutGame}
        </p>
        <h1 className="titel-game">Strategy</h1>
        <ol className="text-game">
          <li>{StrategyTwo}</li>
          <li>{StrategyThree}</li>
          <li>{StrategyFour}</li>
          <li>{StrategyFive}</li>
          <li>{StrategySix}</li>
          <li>{StrategySeven}</li>
          <li>{StrategyEighth}</li>
          <li>{StrategyNine}</li>
        </ol>
      </Fragment>
    );
  }
}

export default connect()(About);
