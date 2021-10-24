import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';
import globalStyles from '../app/app.module.scss';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';

function Header (props) {
  const {headerNavItems} = props;

  return (
    <header className={styles['header']}>
      <div className={`${styles['header__wrapper']} ${globalStyles['container']}`}>
        <Logo />
        <MainNav headerNavItems = {headerNavItems}/>
      </div>
    </header>
  );
}

Header.propTypes = {
  headerNavItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default Header;
