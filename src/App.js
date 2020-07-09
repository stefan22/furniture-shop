import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import ShopStore from './redux/ShopStore';
import { doLoadData } from './redux/actions/data';
// comps
import ShopConnector from './shop/ShopConnector';

// data placeholder
ShopStore.dispatch(doLoadData());

class App extends Component {

  render () {
    return (
      <Provider store={ShopStore}>
        <Router>
          <Switch>
            <Route path='/' component={ShopConnector} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
