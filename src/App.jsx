import React, { useState } from 'react';
import { IconContext } from "react-icons";
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProjectsList from './components/ProjectsList';
import SkillsList from './components/SkillsList';
import Header from './components/Header';

function App() {
  const [lang, changeLang] = useState('pt_BR');

  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <Nav lang={ lang } changeLang={changeLang} />
      <main>
        <Header lang={ lang } />
        <SkillsList lang={ lang } />
        <ProjectsList lang={ lang } />
      </main>
      {/*Header*/}
      {/*SkillsList*/}
      {/*Header*/}
      <Footer />
    </IconContext.Provider>
  );
}

export default App;
