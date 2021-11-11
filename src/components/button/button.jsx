import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import globalStyles from '../app/app.module.scss';

function Button (props) {
  const {
    text,
    onClick,
    mod,
    disabled = false,
    isHiddenText = false,
  } = props;

  return (
    <button
      className={`${styles['button']} ${styles[mod]}`}
      onClick={onClick}
      type='button'
      disabled={disabled}
    >
      <span className={isHiddenText ? globalStyles['visually-hidden'] : ''}>{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  mod: PropTypes.string,
  disabled: PropTypes.bool,
  isHiddenText: PropTypes.bool,
};

export default Button;
