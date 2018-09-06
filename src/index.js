import React from 'react'
import { render } from 'react-dom';

import App from './components/App';

import './components/app.css';

render(<App />, document.getElementById('main'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    console.log('hot reload')
    const App = require('./components/App').default;

    render(<App />, document.getElementById('main'));
  });
}
