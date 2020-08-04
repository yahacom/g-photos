import React from 'react';
import styles from './styles.module.scss';
import {authActions} from '../../ducks/auth';
import {store} from '../../store';

const HeaderComponent = () => {
  const logOut = (e) => {
    e.preventDefault();
    store.dispatch(authActions.signOut());
  }
  return (
    <div className={styles.header}>
      <a href='#' onClick={logOut}>Log Out</a>
    </div>
  )
};

export default HeaderComponent;
