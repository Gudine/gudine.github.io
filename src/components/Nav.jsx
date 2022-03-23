import React, { useState } from 'react';
import projectsList from '../data/projects.json';
import skillsList from '../data/skills.json';
import misc from '../data/misc.json';
import Icon from './Icon';
import './Nav.css';

const Nav = ({ lang, changeLang }) => {
  const [dropdown, changeDropdown] = useState(false);
  const projList = [projectsList[0], ...projectsList.slice(1).reverse()];
  const { start_toc, start_short, skills, projects } = misc;

  const handleMenuClick = (ev) => {
    changeDropdown((prev) => !prev);
    ev.stopPropagation();
  }

  return (
    <nav>
      <div className="left">
        <div className={`menubars${dropdown ? ' active' : ''}`} onClick={handleMenuClick}>
          <Icon id="menu" lang={lang} />
        </div>
        
        <div className="dropdown">
          <ul>
            <li><a href="#inicio">{ start_toc[lang] }</a></li>
            <li>
              <a href="#habilidades">{ skills[lang] }</a>
              <ul>
                {skillsList.map((skill) => (
                  <li key={skill.id}>
                    <a href={`#${skill.id}`}>{skill.name}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#projetos">{ projects[lang] }</a>
              <ul>
                {projList.map((proj) => (
                  <li key={proj.id}>
                    <a href={`#${proj.id}`}>{proj.text[lang].name}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="logo">
          <a href="/">{ start_short[lang] }</a>
        </div>
      </div>

      <div className="lang">
        <div onClick={() => changeLang('pt_BR')}>PT</div>
        <div onClick={() => changeLang('en_US')}>EN</div>
      </div>

    </nav>
  )
}

export default Nav;
