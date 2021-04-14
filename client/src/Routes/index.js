import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';

/**
 * @props {object} config | the config object from <App />
 */
export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <Slideshow />
        </Route>
      </Switch>
    );
  }
}
