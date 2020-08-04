import React, {useEffect} from 'react';
import Header from '../../components/Header';

const AlbumsPage = ({loading, albums, isInitialized, getAlbums}) => {
  useEffect(() => {
    if (isInitialized) {
      getAlbums();
    }
  }, [isInitialized]);
  return (
    <div>
      <Header/>
      <h1>Albums list</h1>
    </div>
  )
};

export default AlbumsPage;
