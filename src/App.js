import React from 'react';
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import ProductData from './components/productData'

function App() {
  return (
    <Provider store={store}>
      <ProductData />
    </Provider>
  );
}

export default App;
