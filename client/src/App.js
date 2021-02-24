import React from 'react';
import Globals from './Globals/index';
import Routes from './Routes/index';

class App extends React.Component {
  render() {
    return (
      <>
        <Globals />
        <div className='App'>
          <Routes />
        </div>
      </>
    );
  }
}

export default App;
