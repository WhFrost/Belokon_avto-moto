import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav-link.module.scss';

function NavLink (props) {
  const {title, link} = props;

  return (
    <a href={link} className={styles['nav-link']}>
      {title}
    </a>
  );
}

NavLink.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default NavLink;
