import React from 'react';
import Markdown from 'markdown-to-jsx';
import projImages from '../img/projects';
import Icon from './Icon';
import './Project.css';

const Project = (props) => {
  const { lang, project: { id, url, tools, made_for, text } } = props;
  const { name, desc } = text[lang];

  const convertIcon = (elem) => (
    <Icon key={elem} id={elem} lang={lang} />
  );

  return (
    <section>
      <div className="halfsplit">
        <header>
          <div className="anchor" id={id}></div>
          <h3>{name}</h3>
        </header>
        <div className="textblock small">
          <Markdown options={{ wrapper: 'p', forceWrapper: true }}>
            {desc}
          </Markdown>
        </div>
      </div>
      <svg viewBox="0 0 70 70"> <polygon points="0,0 70,30 70,40 0,70"/> </svg>
      <figure>
        <a href={url}>
          <img src={projImages[id]} alt={name} />
        </a>
        <figcaption>
          <div className="tools-used">
            {tools.map(convertIcon)}
          </div>
          <div className="made-for">
            {convertIcon(made_for)}
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

export default Project;
