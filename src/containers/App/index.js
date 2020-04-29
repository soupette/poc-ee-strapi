import React from 'react';
import { Fonts, GlobalStyle } from '@buffetjs/styles';
import { BrowserRouter as Router, Switch, Route, Link, k } from 'react-router-dom';
import HomePage from '../HomePage';
import ListView from '../ListView';
import EditView from '../EditView';

function App() {
  return (
    <>
      <Fonts />
      <GlobalStyle />

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/roles">Roles</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/roles/:id">
              <EditView />
            </Route>
            <Route path="/roles">
              <ListView />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
