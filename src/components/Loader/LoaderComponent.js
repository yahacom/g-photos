import React from 'react'
import gPhotosIcon from '../../assets/icon_google_photos.svg';
import styles from './styles.module.scss';

const LoaderComponent = () => {
  return (
    <div className={styles.overlay}>
      <img src={gPhotosIcon} className={styles.loader} />
    </div>
  );
};

export default LoaderComponent;
