import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Page1} />
        <Route path='/page2' component={Page2} />
      </div>
    </Router>
  );
}

export default App;
