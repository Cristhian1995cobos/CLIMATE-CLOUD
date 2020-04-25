import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'
import {store, persistor} from './src/store'

import LOGIN from './src/screen/LOGIN/LOGIN'

/*
export default class App extends Component {
  render(){
    return (
      <LOGIN />
    );
  }
}
*/

const App = () =>(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <LOGIN />
      </PersistGate>
     
  </Provider>
);

export default App;