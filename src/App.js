import React from 'react';
import './App.css';
import SpinningCube from './spinningcube';

function App() {
  return (
   <div className="App">
      3D with three js
      <SpinningCube width={800} height={600} />
   </div>
  );
}

export default App;