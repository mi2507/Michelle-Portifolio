import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundations/Text/index';

// eslint-disable-next-line import/prefer-default-export
export const MenuWrapper = styled.nav`
  font-family: 'Akaya Telivigala', cursive;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  padding: 20px;
  
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
     ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })} 
    &:hover,
    &:focus {
      font-weight: 400;
      color: #070C0E;
      
    }
  }
`;
