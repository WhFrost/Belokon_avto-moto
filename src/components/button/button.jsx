import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button (props) {
  const {
    text,
    onClick,
    mod,
    disabled = false,
  } = props;

  return (
    <button
      className={`${styles['button']} ${styles[mod]}`}
      onClick={onClick}
      type='button'
      disabled={disabled}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  mod: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
