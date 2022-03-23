import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaUser, FaEnvelope, FaGithub, FaLinkedin, FaBars
} from 'react-icons/fa';
import trybeSvg from '../img/trybe.svg';

const Icon = (props) => {
  const { id, lang } = props;
  const data = {
    trybe: {
      elem: trybeSvg,
      pt_BR: 'Este é um projeto da Trybe.',
      en_US: 'This is a Trybe project.'
    },
    menu: {
      elem: FaBars,
      pt_BR: 'Menu',
      en_US: 'Menu'
    },
    personal: {
      elem: FaUser,
      pt_BR: 'Este é um projeto pessoal.',
      en_US: 'This is a personal project.'
    },
    email: {
      elem: FaEnvelope,
      pt_BR: 'E-mail',
      en_US: 'E-mail'
    },
    github: {
      elem: FaGithub,
      pt_BR: 'GitHub',
      en_US: 'GitHub'
    },
    linkedin: {
      elem: FaLinkedin,
      pt_BR: 'LinkedIn',
      en_US: 'LinkedIn'
    },
    html: {
      elem: FaHtml5,
      pt_BR: 'Este projeto utiliza HTML.',
      en_US: 'This project uses HTML.'
    },
    css: {
      elem: FaCss3Alt,
      pt_BR: 'Este projeto utiliza Css.',
      en_US: 'This project uses Css.'
    },
    js: {
      elem: FaJs,
      pt_BR: 'Este projeto utiliza JavaScript Vanilla.',
      en_US: 'This project uses Vanilla JavaScript.'
    },
    react: {
      elem: FaReact,
      pt_BR: 'Este projeto utiliza React.',
      en_US: 'This project uses React.'
    },
  }

  if (id === 'trybe') return (
    <img
      src={data.trybe.elem}
      className={`icon-${id}`}
      alt={data.trybe[lang]}
      title={data.trybe[lang]}
    />
  );
  
  const { elem: Elem, [lang]: title } = data[id];
  return (<Elem title={title} />)
}

export default Icon;
