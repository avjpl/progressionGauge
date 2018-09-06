import React, { Component } from 'react';

import ErrorBoundary from './ErrorBoundary';
import RadialGauge from './RadialGauge'

class App extends Component {
  render() {
    const opts = {
      progressColor: '#EEAD23',
      currentValue: 10,  // max value is 100
      needleColor: '#000',
      needleBaseColor: '#000',
      progressRoundedEdge: false,
      colors: [ 'e00030', 'f7a424', 'f8e71b', '7cd523', '417700' ],
      displayPercentage: false,
    };

    return (
      <ErrorBoundary>
        <RadialGauge { ...opts } />
      </ErrorBoundary>
    )
  }
}

export default App;
