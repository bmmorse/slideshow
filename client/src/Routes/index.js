import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Form from '../components/Form';
import PS from '../components/PS';

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
        <Route exact path='/form'>
          <Form />
        </Route>
        <Route exact path='/ps'>
          <PS />
        </Route>
      </Switch>
    );
  }
}
