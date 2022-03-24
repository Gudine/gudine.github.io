import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProjectsList from './components/ProjectsList';
import SkillsList from './components/SkillsList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <SkillsList />
        <ProjectsList />
      </main>
      <Footer />
    </>
  );
}

export default App;
