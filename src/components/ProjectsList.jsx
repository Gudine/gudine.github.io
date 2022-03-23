import React from 'react';
import projectsList from '../data/projects.json';
import misc from '../data/misc.json';
import Project from './Project';

const ProjectsList = ({ lang }) => {
  const { projects, projects_subtitle } = misc;

  const genProjects = () => {
    const projList = [projectsList[0], ...projectsList.slice(1).reverse()];
    return projList.map((project) => (
      <Project
        lang={lang}
        key={project.id}
        project={project}
      />
    ));
  }
  return (
    <section className="halfsplit">
      <header>
        <div className="anchor" id="projetos"></div>
        <h2>{ projects[lang] }</h2>
      </header>
      <div className="projectsgrid">

        <p className="subtitle">
        { projects_subtitle[lang] }
        </p>
        {genProjects()}
      </div>
    </section>
  )
};

export default ProjectsList;
