import React, { Component } from 'react';
import UserRow from '../UserRow';

import './styles.css';

class UserList extends Component {
  componentDidUpdate() {
    console.log('UserList updated!');
  }
  render() {
    return (
      <div className={`user-list`}>
        {this.props.users && this.props.users.map(user => <UserRow user={user} key={user.id} />)}
      </div>
    );
  }
}

export default UserList;
