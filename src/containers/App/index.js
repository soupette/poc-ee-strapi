import React from 'react';
import { Fonts, GlobalStyle } from '@buffetjs/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SmartImport from '../../SmartImport';
import HomePage from '../HomePage';
import ListView from '../ListView';
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
            <Route path="/roles/new">
              {/*
      EndPoint to create a new role.
      If in CE the USER will be redirected to the entreprise page to upgrade its plan
    */}
              <SmartImport filePath="ee/containers/EditView" redirectStatement={() => true} />
            </Route>
            <Route path="/roles/:id">
              <SmartImport
                filePath="ee/containers/EditView"
                // Use the default view so the user can see the form
                defaultComponentPath="containers/EditView"
              />
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
