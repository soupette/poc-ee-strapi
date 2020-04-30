import React, { useState } from 'react';
import { Fonts, GlobalStyle } from '@buffetjs/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppProvider from '../AppProvider';
import HomePage from '../HomePage';
import ListViewCE from '../ListViewCE';
import ListViewEE from '../ListViewEE';
import RolesFormViewEE from '../RolesFormViewEE';
import RolesFormViewCE from '../RolesFormViewCE';
import EEPage from '../EEPage';

function App() {
  const [isRedirectEnabled, setIsRedirect] = useState(true);
  const toggleRedirect = () => setIsRedirect((prev) => !prev);

  return (
    <AppProvider isRedirectEnabled={isRedirectEnabled} toggleRedirect={toggleRedirect}>
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
                  <Link to="/roles-ee">Roles EE</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/roles-ce">Roles CE</Link>
                </p>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/roles-ee/:id">
              <RolesFormViewEE />
            </Route>
            <Route path="/roles-ce/:id">
              <RolesFormViewCE />
            </Route>
            <Route path="/roles-ce">
              <ListViewCE />
            </Route>
            <Route path="/roles-ee">
              <ListViewEE />
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
    </AppProvider>
  );
}

export default App;
