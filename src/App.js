import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RootRouter from './router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import load from './api/load';
import Script from 'react-load-script';

function App() {
  const onAPILoad = () => {
    load();
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Script
          url='https://apis.google.com/js/api.js'
          onLoad={onAPILoad}
        />
        <Router>
          <RootRouter />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
