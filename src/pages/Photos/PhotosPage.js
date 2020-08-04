import React, {useEffect} from 'react';
import {Header, Loader} from '../../components'
import styles from './styles.module.scss';
import {useParams} from 'react-router-dom'

const PhotosPage = ({loading, photos, isInitialized, getPhotos, name, email}) => {
  const {albumId} = useParams();
  useEffect(() => {
    if (isInitialized) {
      getPhotos({albumId});
    }
  }, [isInitialized]);
  const renderPhotos = () => photos.map(({id, baseUrl}) => (
    <div className={styles.item} key={id}>
      <div className={styles.itemCover} style={{backgroundImage: `url(${baseUrl}`}} />
    </div>
  ))
  return (
    <div className={styles.albums}>
      <Header
        title='Photos list'
        user={name}
        email={email} />
      <div className={styles.albumsList}>
        {renderPhotos()}
      </div>
      {loading && <Loader />}
    </div>
  )
};

export default PhotosPage;
