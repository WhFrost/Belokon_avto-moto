import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button (props) {
  const {text, onClick, mod} = props;

  return (
    <button
      className={`${styles['button']} ${styles[mod]}`}
      onClick={onClick}
      type='button'
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  mod: PropTypes.string,
};

export default Button;
