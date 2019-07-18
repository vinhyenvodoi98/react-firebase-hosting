import React from 'react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Page1} />
          <Route path='/page2' component={Page2} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
