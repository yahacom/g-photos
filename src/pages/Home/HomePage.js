import React from 'react';
import styles from './styles.module.scss';
import gPhotosIcon from '../../assets/icon_google_photos.svg';

const HomeScreen = () => {
  const signIn = async () => {
    const {gapi} = window;
    const authInstance = await gapi.auth2.getAuthInstance();
    return await authInstance.signIn();
  }
  const onClick = () => {
    const {gapi} = window;
    gapi.client.init({
      apiKey: process.env.REACT_APP_API_KEY,
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/photoslibrary'
    });
    console.log(signIn());
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
