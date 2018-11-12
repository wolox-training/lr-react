import React, { Component } from 'react';

import './styles.css';

class UserRow extends Component {
  state={isActive: this.props.user.active}

  toggleActive = () => this.setState({isActive: !this.state.isActive})

  render() {
    return (
      <div className={`user-row ${this.state.isActive ? '' : 'toggle-off'}`}>
        <h3>{this.props.user.name}</h3>
        <div className="toggle">
          <button onClick={this.toggleActive}>
            {this.state.isActive ? 'Desactivar' : 'Activar'}
          </button>
        </div>
      </div>
    );
  }
}

export default UserRow;
