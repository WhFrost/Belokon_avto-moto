import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';
import globalStyles from '../app/app.module.scss';
import FooterNav from '../footer-nav/footer-nav';

function Footer (props) {
  const {footerNavItems} = props;

  return (
    <footer className={styles['footer']}>
      <div className={`${styles['footer__wrapper']} ${globalStyles['container']}`}>
        <FooterNav footerNavItems = {footerNavItems}/>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  footerNavItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default Footer;
