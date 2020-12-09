import React from 'react';
import './Global.scss';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
