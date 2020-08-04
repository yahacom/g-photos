import React from 'react';
import styles from './styles.module.scss';
import {authActions} from '../../ducks/auth';
import {store} from '../../store';

const HeaderComponent = ({title, user, email, showLogOut}) => {
  const logOut = (e) => {
    e.preventDefault();
    store.dispatch(authActions.signOut());
  }
  return (
    <div className={styles.header}>
      <div className={styles.infoWrapper}>
        <h1>{title}</h1>
        <div className={styles.userInfo}>{user}<br />{email}</div>
      </div>
      {showLogOut && <a href='#' onClick={logOut}>Log Out</a>}
    </div>
  )
};

HeaderComponent.defaultProps = {
  showLogOut: true,
}

export default HeaderComponent;
