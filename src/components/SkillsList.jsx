import React from 'react';
import skillsList from '../data/skills.json';
import misc from '../data/misc.json';
import Skill from './Skill';

const SkillsList = ({ lang }) => {
  const { skills } = misc;

  const genSkills = () => {
    return skillsList.map((skill) => (
      <Skill
        lang={lang}
        key={skill.id}
        skill={skill}
      />
    ));
  }
  
  return (
    <section className="halfsplit">
      <header>
        <div className="anchor" id="habilidades"></div>
        <h2>{ skills[lang] }</h2>
      </header>
      <div className="skillsgrid">
        {genSkills()}
      </div>
    </section>
  )
};

export default SkillsList;
