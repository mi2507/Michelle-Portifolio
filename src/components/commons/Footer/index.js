import React from "react";
import styled from "styled-components";


const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  background-color:#172758;
  color: #ffffff;
  img {
    width: 32px;
    margin-left: 23px;
  }
  span{
    display: flex;
    flex: auto;
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

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <span>Michelle Regina | 2021</span>
      
        <a href="https://www.linkedin.com/in/michelle-regina-86116733/">
        <img src="https://raw.githubusercontent.com/madalossolaura/portfolio/da4be2647bd00a12091757671f41900bc14115ac/public/images/icon_linkedin.svg" alt="Linkedin"/>
        </a>
        <a href="https://github.com/mi2507">
        <img src="https://raw.githubusercontent.com/madalossolaura/portfolio/da4be2647bd00a12091757671f41900bc14115ac/public/images/icon_github.svg"alt="Linkedin"/>
        </a>
    
    </FooterWrapper>
  );
}