import React, { PureComponent } from 'react';
import { func, bool, shape, string, number } from 'prop-types';
import Button from '@components/Button';

import styles from './styles.scss';

class Book extends PureComponent {
  handleClick = () => {
    const {
      data: { id, name },
      configButton
    } = this.props;
    if (configButton.isDanger) {
      configButton.function(id);
    } else {
      configButton.function({ id, name, quantity: 1 });
    }
  };

  render() {
    const { data, configButton } = this.props;
    return (
      <div className={styles.bookItem}>
        <div className={styles.book}>
          <div className={styles.bookFront}>
            <div>
              <img src={data.image} alt={data.name} className={styles.bookCover} />
            </div>
            <div />
          </div>
          <div className={styles.bookPages}>
            <div />
            <div>
              <h1 className={styles.title}>{data.name}</h1>
              <h4 className={styles.subtitle}>{data.author}</h4>
              <p>{data.summary}</p>
              <h6 className={styles.year}>Publication: {data.year}</h6>
            </div>
            <div />
            <div />
            <div />
          </div>
          <div className={styles.bookBack} />
        </div>
        <Button {...configButton} onClick={this.handleClick} />
      </div>
    );
  }
}

Book.propTypes = {
  data: shape({
    id: number,
    name: string,
    author: string,
    image: string,
    summary: string,
    year: number
  }),
  configButton: shape({
    text: string.isRequired,
    function: func.isRequired,
    isDanger: bool
  })
};

export default Book;
