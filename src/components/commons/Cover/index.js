import React from "react";
import Text from "../../foundations/Text";
import Masthead from './styles/Masthead'
import MastheadImage from './styles/MastheadImage'


export default function Cover() {
  return (
    
    <Masthead>
      
<MastheadImage>
  {/* <h1>Teste </h1> */}
  <img src="https://raw.githubusercontent.com/madalossolaura/portfolio/da4be2647bd00a12091757671f41900bc14115ac/public/images/icon_linkedin.svg" alt="Linkedin"/>
  
</MastheadImage>

      <Text
        variant="title"
        tag="h1"
        textAlign="center"
        color="primary.main"
        marginBottom="0">


        Michelle Regina

      </Text>
      <Text
        variant="titleXS"
        tag="h2"
        textAlign="center"
        color="primary.main"
        marginTop="0">

        Front-end Developer
      </Text>
    </Masthead>
  );
}