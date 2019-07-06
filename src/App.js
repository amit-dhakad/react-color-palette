import React from 'react';
import Palette from './Palette';
import ColorSeeds from './seedColors';

function App() {
  return (
    <div>
      <Palette {...ColorSeeds[4]} />
    </div>
  );
}

export default App;
