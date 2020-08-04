import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RootRouter from './router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

function App() {
  useEffect(() => {
    window.gapi && window.gapi.load('auth2:client');
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <RootRouter />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
