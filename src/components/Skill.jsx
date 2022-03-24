import React from 'react';
import Markdown from 'markdown-to-jsx';
import './Skill.css';
import { useSelector } from 'react-redux';

const Skill = (props) => {
  const { skill: { id, name, text } } = props;
  const lang = useSelector((state) => state.lang);

  return (
    <section className="halfsplit">
      <header>
        <div className="anchor" id={ id }></div>
        <h3>{ name }</h3>
      </header>
      <div className="textblock small">
        <Markdown options={{ wrapper: 'p', forceWrapper: true }}>
          {text[lang]}
        </Markdown>
      </div>
    </section>
  );
}

export default Skill;
