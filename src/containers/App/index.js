import React from 'react';
import { Fonts, GlobalStyle } from '@buffetjs/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';

function App() {
  return (
    <>
      <Fonts />
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
