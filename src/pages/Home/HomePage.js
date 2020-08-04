import React from 'react';
import styles from './styles.module.scss';
import gPhotosIcon from '../../assets/icon_google_photos.svg';
import {Loader} from '../../components';

const HomePage = ({loading, signIn}) => {
  return (
    <div className={styles.home}>
      <div className={styles.pageWrapper}>
        <button className={styles.button} onClick={signIn}>
          <img src={gPhotosIcon} className={styles.gLogo} alt="logo" />
        </button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
