import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RootRouter from './router';

function App() {
  return (
    <Router>
      <RootRouter />
    </Router>
  );
}

export default App;
