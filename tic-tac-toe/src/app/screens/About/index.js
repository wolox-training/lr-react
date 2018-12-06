import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import NavBar from '../../screens/NavBar';

class About extends Component {
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.dispatch(push('/'));
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <h1 className="titel-game">History TIC-TAC-TOE</h1>
        <p className="text-game">
          <img
            className="img-game"
            alt="imagen-tic-tac-toe"
            src={'https://thumbs.gfycat.com/PoisedGrippingFox-size_restricted.gif'}
          />
          Games played on three-in-a-row boards can be traced back to ancient Egypt,[5] where such game boards
          have been found on roofing tiles dating from around 1300 BCE.[6] An early variation of tic-tac-toe
          was played in the Roman Empire, around the first century BC. It was called terni lapilli (three
          pebbles at a time) and instead of having any number of pieces, each player only had three, thus they
          had to move them around to empty spaces to keep playing.[7] The game's grid markings have been found
          chalked all over Rome. Another closely related ancient game is Three Men's Morris which is also
          played on a simple grid and requires three pieces in a row to finish,[8] and Picaria, a game of the
          Puebloans. The different names of the game are more recent. The first print reference to "noughts
          and crosses" (nought being an alternative word for zero), the British name, appeared in 1858, in an
          issue of Notes and Queries.[9] The first print reference to a game called "tick-tack-toe" occurred
          in 1884, but referred to "a children's game played on a slate, consisting in trying with the eyes
          shut to bring the pencil down on one of the numbers of a set, the number hit being scored".
          "Tic-tac-toe" may also derive from "tick-tack", the name of an old version of backgammon first
          described in 1558. The US renaming of "noughts and crosses" as "tic-tac-toe" occurred in the 20th
          century.[10] In 1952, OXO (or Noughts and Crosses), developed by British computer scientist
          Alexander S. Douglas for the EDSAC computer at the University of Cambridge, became one of the first
          known video games.[11][12] The computer player could play perfect games of tic-tac-toe against a
          human opponent.[11] In 1975, tic-tac-toe was also used by MIT students to demonstrate the
          computational power of Tinkertoy elements. The Tinkertoy computer, made out of (almost) only
          Tinkertoys, is able to play tic-tac-toe perfectly.[13] It is currently on display at the Museum of
          Science, Boston.
        </p>
        <h1 className="titel-game">Strategy</h1>
        <ol className="text-game">
          <li>Win: If the player has two in a row, they can place a third to get three in a row.</li>
          <li>
            Block: If the opponent has two in a row, the player must play the third themselves to block the
            opponent.
          </li>
          <li>
            ork: Create an opportunity where the player has two threats to win (two non-blocked lines of 2).
          </li>
          <li>
            Blocking an opponent's fork: If there is only one possible fork for the opponent, the player
            should block it. Otherwise, the player should block any forks in any way that simultaneously
            allows them to create two in a row. Otherwise, the player should create a two in a row to force
            the opponent into defending, as long as it doesn't result in them creating a fork. For example, if
            "X" has two opposite corners and "O" has the center, "O" must not play a corner in order to win.
            (Playing a corner in this scenario creates a fork for "X" to win.)
          </li>
          <li>
            Center: A player marks the center. (If it is the first move of the game, playing on a corner gives
            the second player more opportunities to make a mistake and may therefore be the better choice;
            however, it makes no difference between perfect players.)
          </li>
          <li>Opposite corner: If the opponent is in the corner, the player plays the opposite corner.</li>
          <li>Empty corner: The player plays in a corner square.</li>
          <li>Empty side: The player plays in a middle square on any of the 4 sides.</li>
        </ol>
      </Fragment>
    );
  }
}

export default connect()(About);
