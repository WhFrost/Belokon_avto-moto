import React from 'react';
import PropTypes from 'prop-types';
import styles from './main-nav.module.scss';
import {nanoid} from 'nanoid';
import NavLink from '../nav-link/nav-link';

function MainNav (props) {
  const {headerNavItems} = props;

  return (
    <nav className={styles['main-nav']}>
      <ul className={styles['main-nav__list']}>
        {
          headerNavItems.map((item) => (
            <li className={styles['main-nav__item']} key={nanoid()}>
              <NavLink title={item.title} link = {item.link} />
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
MainNav.propTypes = {
  headerNavItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default MainNav;
