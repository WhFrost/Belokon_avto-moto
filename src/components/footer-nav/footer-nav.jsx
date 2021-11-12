import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer-nav.module.scss';
import {nanoid} from 'nanoid';
import NavLink from '../nav-link/nav-link';

function FooterNav (props) {
  const {footerNavItems} = props;

  return (
    <ul className={styles['footer-nav__list']}>
      {
        footerNavItems.map((item) => (
          <li className={styles['footer-nav__item']} key={nanoid()}>
            <NavLink title={item.title} link = {item.link} />
          </li>
        ))
      }
    </ul>
  );
}
FooterNav.propTypes = {
  footerNavItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default FooterNav;
