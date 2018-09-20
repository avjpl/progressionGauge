import React, { Component } from 'react';

import ErrorBoundary from './ErrorBoundary';
import RadialGauge from './RadialGauge';

class App extends Component {
  render() {
    const opts = {
      progressColor: '#EEAD23',
      currentValue: 30,
      colors: [ 'e00030', 'f7a424', 'f8e71b', '7cd523', '417700' ],
      textPosition: 'centerMiddleBottom'
    };

    return (
      <ErrorBoundary>
        <RadialGauge { ...opts } />
      </ErrorBoundary>
    )
  }
}

export default App;
