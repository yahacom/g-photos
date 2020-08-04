import {connect} from 'react-redux';
import PhotosPage from './PhotosPage'
import {albumsActions} from '../../ducks/albums';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.albums.loading || !state.initialize.isInitialized,
    photos: state.albums.photos,
    isInitialized: state.initialize.isInitialized,
    name: state.auth.name,
    email: state.auth.email,
  };
};

const mapDispatchToProps = {
  getPhotos: albumsActions.photosRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotosPage);
