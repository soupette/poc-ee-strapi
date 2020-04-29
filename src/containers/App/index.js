import React from 'react';
import { Fonts, GlobalStyle } from '@buffetjs/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage';
import ListView from '../ListView';
import EditView from '../RolesFormView';
import EEPage from '../EEPage';

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
                <p>
                  <Link to="/">Home</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/entreprise-edition">EE</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/roles">Roles</Link>
                </p>
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
            <Route path="/entreprise-edition">
              <EEPage />
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
