import './App.css';

import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main/Main.js';

import CardSection from './components/CardSection/CardSection.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main>
        <section id="title-section">
          <h6 id="pre-title">DevSoc presents</h6>
          <h1 id="main-title">unilectives</h1>
          <h5 id="sub-title">Your one-stop shop for UNSW course and elective reviews.</h5>
        </section>
        <section id="search-section">
          <input type="text" id="search-bar" placeholder="Search for a course e.g. COMP1511" />
          <select id="search-filter">
            <option value="">Sort by</option>
          </select>
        </section>
        <CardSection />
      </Main>
    </div>
  );
}

export default App;
