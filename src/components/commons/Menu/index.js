import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Text } from '../../foundations/Text';

export default function Menu() {
  return (
    <MenuWrapper>

      <MenuWrapper.CentralSide as="ul">
        &#60; /Mi &#62;
        {[
          { url: '/', name: 'Home' },
          { url: '#About', name: 'About' },
          { url: '/Contacts', name: 'Contacts' },

        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
    </MenuWrapper>
  );
}
