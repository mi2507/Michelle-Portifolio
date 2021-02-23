import styled, {
  css
} from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import {
  TextStyleVariantsMap
} from '../../../foundations/Text';


const MenuWrapper = styled.nav `
  font-family: 'Akaya Telivigala', cursive;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;
  height:70px;
  
`;

MenuWrapper.LeftSide = styled.div `
z-index: 1;
position: absolute;
color: #ffffff;
margin-left: 16px;

`;

MenuWrapper.RightSide = styled.div `

  list-style: none;
  display: flex;
    justify-content: center;
    padding: 16px 40px;
    background-color: 
    #0e1537;
   li {
      /* &:first-child { */
        margin: 16px;
      /* } */
  }
  a {
      font-family: 'Akaya Telivigala',cursive;
      text-transform: uppercase;
      text-align: center;
      display: block;
      text-decoration: none;
      color: #ffffff;
      transition: 200ms ease-in-out;
      ${breakpointsMedia({
      xs: css`
      ${TextStyleVariantsMap.smallestException}
      `,
      md: css`
      ${TextStyleVariantsMap.paragraph1}
      `,
  })}
  &:hover,
  &:focus {
    font-weight: 500;
    color:#1a4392;
    
  }
}
`;

export default MenuWrapper;