import React from 'react';
import { useSelector } from 'react-redux';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaUser, FaEnvelope, FaGithub, FaLinkedin, FaBars
} from 'react-icons/fa';
import trybeSvg from '../img/trybe.svg';
import icons from '../data/icons.json';

const Icon = ({ id }) => {
  const lang = useSelector((state) => state.lang);
  const idToElem = {
    trybe: trybeSvg,
    menu: FaBars,
    personal: FaUser,
    email: FaEnvelope,
    github: FaGithub,
    linkedin: FaLinkedin,
    html: FaHtml5,
    css: FaCss3Alt,
    js: FaJs,
    react: FaReact,
  }

  if (id === 'trybe') return (
    <img
      src={idToElem[id]}
      className={`icon-${id}`}
      alt={icons[id][lang]}
      title={icons[id][lang]}
    />
  );
  
  const { [id]: Elem } = idToElem;
  const { [lang]: title } = icons[id];
  return (<Elem className="icon" title={title} />)
}

export default Icon;
