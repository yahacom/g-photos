import { connect } from 'react-redux';
import AlbumsPage from './AlbumsPage'
import { albumsActions } from '../../ducks/albums';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.albums.loading || !state.initialize.isInitialized,
    albums: state.albums.albums,
    isInitialized: state.initialize.isInitialized,
    name: state.auth.name,
    email: state.auth.email,
  };
};

const mapDispatchToProps = {
  getAlbums: albumsActions.albumsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumsPage);
