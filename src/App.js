import React from 'react';
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import ProductData from './components/productData'
import LoginPage from './components/loginPage'
import CartProduct from './components/cartProduct'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/"><LoginPage /></Route>
          <Route path="/product"><ProductData /></Route>
          <Route path="/cartProduct"><CartProduct /></Route>
        </Switch>
      </Router >
    </Provider >
  );
}

export default App;
