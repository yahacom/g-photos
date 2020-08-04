import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';

const AlbumsPage = ({loading, albums, isInitialized, getAlbums}) => {
  useEffect(() => {
    if (isInitialized) {
      getAlbums();
    }
  }, [isInitialized]);
  const renderAlbums = () => albums.map(({id, title, coverPhotoBaseUrl, mediaItemsCount}) => (
    <Link to={`/albums/${id}`} className={styles.item} key={id}>
      <div className={styles.itemCover} style={{backgroundImage: `url(${coverPhotoBaseUrl}`}} />
      <div className={styles.itemInfo}>
        <b>{title}</b><br />
        {mediaItemsCount} photos inside album
      </div>
    </Link>
  ))
  return (
    <div className={styles.albums}>
      <Header/>
      <div className={styles.albumsList}>
        {renderAlbums()}
      </div>
    </div>
  )
};

export default AlbumsPage;
