import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import ShopStore from './redux/ShopStore';
import { doLoadData } from './redux/actions/data';

// placeholder data
ShopStore.dispatch(doLoadData());

class App extends Component {

  render () {
    return (
      <Provider store={ShopStore}>
        <div className='App'>
          <header className='App-header'>
          App js component
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
