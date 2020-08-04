import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = true;

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to="/albums" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.defaultProps = {
  isPrivate: false
};
