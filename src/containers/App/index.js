import React from 'react';
import { Fonts, GlobalStyle } from '@buffetjs/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateView from 'ee_else_ce/containers/CreateView';
import EditView from 'ee_else_ce/containers/EditView';
import HomePage from '../HomePage';
import ListView from '../ListView';
import EEPage from '../EEPage';
import ContentManager from '../../plugins/ContentManager/containers/App';

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
              <li>
                <p>
                  <Link to="/plugins/content-manager">Content manager</Link>
                </p>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/roles/new">
              <CreateView />
            </Route>
            <Route path="/roles/:id">
              <EditView />
            </Route>
            <Route path="/roles">
              <ListView />
            </Route>
            <Route path="/entreprise-edition">
              <EEPage />
            </Route>
            <Route path="/plugins/content-manager">
              <ContentManager />
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
