import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';
import {Home, Albums, Photos} from '../pages';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/albums/:albumId" component={Photos} isPrivate />
      <Route path="/albums" component={Albums} isPrivate />
      <Route component={Home} />
    </Switch>
  );
};
