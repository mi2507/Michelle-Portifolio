/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 28px;
  padding-left: 28px;
  background-color:#fff;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  color: #88989E;
  margin: 24px 0 16px;
  img {
    width: 32px;
    margin-left: 23px;
  }
  span{
    display: flex;
    flex: auto;
    color:#3f3f3f;
  }
  a {
    color: #ffffff;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export const MenuFooter = styled.nav`
  font-family: 'Akaya Telivigala', cursive;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 18px;
  padding-left: 28px;
  padding-right: 28px;
  width: 100%;
`;

export default function Footer(props) {
  return (
    <MenuFooter>
      <FooterWrapper {...props}>
        <span>Michelle R. | 2021 </span>
        <a href="https://www.linkedin.com/in/michelle-regina-86116733/">
          <img src="https://raw.githubusercontent.com/madalossolaura/portfolio/da4be2647bd00a12091757671f41900bc14115ac/public/images/icon_linkedin.svg" alt="Linkedin" />
        </a>
        <a href="https://github.com/mi2507">
          <img src="https://raw.githubusercontent.com/madalossolaura/portfolio/da4be2647bd00a12091757671f41900bc14115ac/public/images/icon_github.svg"alt="Linkedin" />
        </a>
      </FooterWrapper>
    </MenuFooter>
  );
}
