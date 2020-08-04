import React, {useEffect} from 'react';
import {Header, Loader} from '../../components'
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';

const AlbumsPage = ({loading, albums, isInitialized, getAlbums, name, email}) => {
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
      <Header
        title='Albums list'
        user={name}
        email={email} />
      <div className={styles.albumsList}>
        {renderAlbums()}
      </div>
      {loading && <Loader />}
    </div>
  )
};

export default AlbumsPage;
