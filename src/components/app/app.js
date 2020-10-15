import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomeRoute } from '../../routes';
import './app.css';

const App = () => (
  <Router>
      <Switch>
        <HomeRoute />
      </Switch>
  </Router>
)
export default App;
