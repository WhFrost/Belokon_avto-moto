import React from 'react';
import styles from './app.module.scss';
import Header from '../header/header';
import Product from '../product/product';
import {HEADER_NAV_ITEMS} from '../../const';

function App() {
  return (
    <>
      <Header headerNavItems = {HEADER_NAV_ITEMS}/>
      <main>
        <h1 className={styles['visually-hidden']}>Avto-Moto Марпех 11</h1>
        <Product />
      </main>
    </>
  );
}

export default App;
