import React from 'react';
import Icon from './Icon';

const FooterIcon = (props) => {
  const { id, link } = props;
  return (
    <li>
      <a href={link}>
        <Icon id={id} lang="pt_BR" />
      </a>
    </li>
  )
}

export default FooterIcon;
