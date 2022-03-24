import Markdown from 'markdown-to-jsx';
import React from 'react';
import { useSelector } from 'react-redux';
import misc from '../data/misc.json';
import face from '../img/face.png';
import './Header.css';

const Header = () => {
  const lang = useSelector((state) => state.lang);
  const { start, start_short, start_content } = misc;

  return (
    <header className="halfsplit">
      <div className="headerstart">
        <div className="anchor" id="inicio" />
        <img id="headerimg" src={ face } alt={ start_short[lang] } />
        <Markdown options={{ wrapper: 'h1', forceWrapper: true }}>
        { start[lang] }
        </Markdown>
      </div>
      <div className="textblock big">
        <Markdown options={{ wrapper: 'p', forceWrapper: true }}>
          { start_content[lang] }
        </Markdown>
      </div>
    </header>
  )
}

export default Header;
