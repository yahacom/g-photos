import React from "react";
import {connect} from 'react-redux';
import {Route, Redirect} from "react-router-dom";

const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
});

const RouteWrapper = ({
  component: Component,
  isPrivate,
  isAuthorized,
  ...rest
}) => {
  if (isPrivate && !isAuthorized) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && isAuthorized) {
    return <Redirect to="/albums" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.defaultProps = {
  isPrivate: false
};

export default connect(mapStateToProps)(RouteWrapper);
