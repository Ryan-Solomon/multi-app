import React from 'react';
import './Global.scss';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/Nav';
import InfiniteScrollPage from './pages/InfiniteScrollPage';
import CounterGamePage from './pages/CounterGamePage';
import SportsQuizPage from './pages/SportsQuizPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/infinitescroll'>
          <InfiniteScrollPage />
        </Route>
        <Route exact path='/countergame'>
          <CounterGamePage />
        </Route>
        <Route exact path='/quiz'>
          <SportsQuizPage />
        </Route>
        <Route exact path='/cart'>
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
