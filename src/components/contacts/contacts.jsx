import React from 'react';
import PropTypes from 'prop-types';
import styles from './contacts.module.scss';
import Map from '../map/map';

function Contacts (props) {
  const {contacts} = props;
  const {
    adressTitle,
    adressValue,
    workTimeTitle,
    workTimeValue,
    phoneTitle,
    phoneValue,
    emailTitle,
    emailValue,
  } = contacts;

  return (
    <div className={styles['contacts']}>
      <ul className={styles['contacts__list']}>
        <li className={styles['contacts__item']}>
          <span className={styles['contacts__title']}>
            {adressTitle}
          </span>
          <span className={styles['contacts__value']}>
            {adressValue}
          </span>
        </li>
        <li className={styles['contacts__item']}>
          <span className={styles['contacts__title']}>
            {workTimeTitle}
          </span>
          <span className={styles['contacts__value']}>
            {workTimeValue}
          </span>
        </li>
        <li className={styles['contacts__item']}>
          <span className={styles['contacts__title']}>
            {phoneTitle}
          </span>
          <span className={styles['contacts__value']}>
            <a href={`tel:${phoneValue}`} className={styles['contacts__link']}>
              {phoneValue}
            </a>
          </span>
        </li>
        <li className={styles['contacts__item']}>
          <span className={styles['contacts__title']}>
            {emailTitle}
          </span>
          <span className={styles['contacts__value']}>
            <a href={`mailto:${emailValue}`} className={styles['contacts__link']}>
              {emailValue}
            </a>
          </span>
        </li>
      </ul>
      <Map />
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.shape({
    adressTitle: PropTypes.string,
    adressValue: PropTypes.string,
    workTimeTitle: PropTypes.string,
    workTimeValue: PropTypes.string,
    phoneTitle: PropTypes.string,
    phoneValue: PropTypes.string,
    emailTitle: PropTypes.string,
    emailValue: PropTypes.string,
  }),
};

export default Contacts;
