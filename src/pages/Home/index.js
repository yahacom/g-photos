import { connect } from 'react-redux';
import HomePage from './HomePage'
import { authActions } from '../../ducks/auth';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.auth.loading || !state.initialize.isInitialized,
  };
};

const mapDispatchToProps = {
  signIn: authActions.signInRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
