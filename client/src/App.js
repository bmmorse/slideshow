import React from 'react';
import Globals from './Globals/index';
import Routes from './Routes/index';
import GlobalContext from './components/_context';

class App extends React.Component {
  render() {
    return (
      <>
        <Globals />
        <div className='App'>
          <GlobalContext.Provider>
            <Routes />
          </GlobalContext.Provider>
        </div>
      </>
    );
  }
}

export default App;
