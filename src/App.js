import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import ShopStore from './redux/ShopStore';
// comps
import { ThemeProvider } from '@material-ui/styles';
import ShopConnector from './shop/ShopConnector';

import theme from "./styles/theme";

class App extends Component {

  render () {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={ShopStore}>
          <Router>
            <Switch>
              <Route path='/' component={ShopConnector} />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
