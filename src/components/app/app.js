import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Menu } from '../../pages'
import './app.css';

const App = () => (
  <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/menu" component={Menu} />
      </Switch>
  </Router>
)
export default App;
