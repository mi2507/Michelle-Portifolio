import React from 'react';
import Text from '../../foundations/Text';
import menuWrapper from './styles/menuWrapper'


const links = [
  {
    texto: 'Inicio',
    url: '/inicio',
  },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
    {
      texto: 'Contato',
      url: '/contato',
    },
  ];

  export default function Menu() {
    return (
      <menuWrapper>
       
        <menuWrapper.LeftSide>
       
        </menuWrapper.LeftSide>
       
        <menuWrapper.RightSide>
       
        {links.map((link) => (
            <li key={link.url}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.texto}
              </Text>
            </li>
            
          ))}
        </menuWrapper.RightSide>
      </menuWrapper>
    );
  }