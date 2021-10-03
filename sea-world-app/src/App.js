import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SeaWorldGrid from './components/SeaWorldGrid';
import GridDimension from './components/GridDimension';
import Instructions from './components/Instructions';
import Title from './components/Title';
import FooterGrid from './components/FooterGrid';

function App() {

  return (

    <React.Fragment>
      <header>
        <Title />
      </header>
      <main>
        <Instructions />
        <GridDimension />
        <SeaWorldGrid />
      </main>
      <FooterGrid />
    </React.Fragment>

  );
}

export default App;
