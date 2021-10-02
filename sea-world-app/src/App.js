import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SeaWorldGrid from './components/SeaWorldGrid';
import GridDimension from './components/GridDimension';
import Instructions from './components/Instructions';
import Title from './components/Title';

function App() {

  return (

    <React.Fragment>
      <header>
        <Title />
      </header>
      <main>
        <GridDimension />
        <Instructions />
        <SeaWorldGrid />
      </main>
      <footer>

      </footer>

    </React.Fragment>

  );
}

export default App;
