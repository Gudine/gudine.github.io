import React from 'react';
import FooterIcon from './FooterIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <ul>
        <FooterIcon
          id="email"
          link="mailto:gudine283@gmail.com"
        />
        <FooterIcon
          id="github"
          link="https://github.com/Gudine"
        />
        <FooterIcon
          id="linkedin"
          link="https://www.linkedin.com/in/guilherme-he-cunha/"
        />
      </ul>
    </footer>
  )
}

export default Footer;
