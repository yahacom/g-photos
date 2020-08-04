import React from 'react';
import './styles.css';
import gPhotosIcon from '../../assets/icon_google_photos.svg';

const HomeScreen = () => {
  const onClick = () => {

  };
  return (
    <div className={'home'}>
      <div className={'page-wrapper'}>
        <button className={'button'} onClick={onClick}>
          <img src={gPhotosIcon} className="g-logo" alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
