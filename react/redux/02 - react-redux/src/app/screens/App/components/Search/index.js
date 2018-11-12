import React, { Component } from 'react';
import { func } from 'prop-types';

import styles from './styles.scss';

class Search extends Component {
  search = e => {
    this.props.onSearch(e.target.value.toLowerCase());
  };

  render() {
    return <input className={styles.input} type="text" placeholder="Search by name" onChange={this.search} />;
  }
}

Search.propTypes = {
  onSearch: func.isRequired
};

export default Search;
