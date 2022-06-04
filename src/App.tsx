import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import Stats from './components/Stats';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Stats />
      </Provider>
    </div>
  );
}

export default App;
