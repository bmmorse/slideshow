import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/index';

/**
 * @props {object} config | the config object from <App />
 */
export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    );
  }
}
