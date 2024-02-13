import './App.css';

import React, { useEffect, useState, createContext } from 'react';
import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main/Main.js';

import CardSection from './components/CardSection/CardSection.js';
import Modal from './components/Modal/Modal.js';

export const PageContext = createContext();

function App() {

  const [titleClicked, setTitleClicked] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    if (titleClicked) {
      document.getElementById("main-title").style.color = "red";
    } else {
      document.getElementById("main-title").style.color = "#1479f2";
    }
  }, [titleClicked]);

  return (
    <div id="app">
      <NavBar />
      <Main>
        <section id="title-section">
          <h6 id="pre-title">DevSoc presents</h6>
          <h1 id="main-title" onClick={() => setTitleClicked(!titleClicked)}>unilectives</h1>
          <h5 id="sub-title">Your one-stop shop for UNSW course and elective reviews.</h5>
        </section>
        <section id="search-section">
          <input type="text" id="search-bar" placeholder="Search for a course e.g. COMP1511" onClick={() => setSearchClicked(!searchClicked)}/>
          <select id="search-filter">
            <option value="">Sort by</option>
          </select>
        </section>
        <CardSection />
      </Main>
      {searchClicked &&
      <PageContext.Provider value={setSearchClicked}>
        <Modal />
      </PageContext.Provider>}
    </div>
  );
}

export default App;
