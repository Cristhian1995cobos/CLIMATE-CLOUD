import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {store} from './src/store'

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
      <LOGIN />
  </Provider>
);

export default App;