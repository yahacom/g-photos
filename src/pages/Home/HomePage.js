import React from 'react';
import styles from './styles.module.scss';
import gPhotosIcon from '../../assets/icon_google_photos.svg';

const HomeScreen = () => {
  const onClick = () => {

  };
  return (
    <div className={styles.home}>
      <div className={styles.pageWrapper}>
        <button className={styles.button} onClick={onClick}>
          <img src={gPhotosIcon} className={styles.gLogo} alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
