import React from 'react';
import 'src/Styles/main.scss';

function App() {
  return (
    <div className="App">
      <h1>
        {process.env.REACT_APP_GREET}
      </h1>
    </div>
  );
}

export default App;
