import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RootRouter from './router';

function App() {
  useEffect(() => {
    window.gapi && window.gapi.load('auth2:client');
  }, []);
  return (
    <Router>
      <RootRouter />
    </Router>
  );
}

export default App;
