import React from 'react';
import styles from './logo.module.scss';
import logo from '../../assets/img/logo.svg';

function Logo () {
  return (
    <a href="/" className={styles['logo']}>
      <img src={logo} alt="Avto-Moto" />
    </a>
  );
}

export default Logo;
