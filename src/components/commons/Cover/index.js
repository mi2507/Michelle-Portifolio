import React from "react";
import Text from "../../foundations/Text";
import Masthead from './styles/Masthead';
import MastheadImage from './styles/MastheadImage';
import Image from 'next/image'
import img from '../../../../public/profile.jpg'



export default function Cover() {
  return (

    <Masthead>


      <div class="container" >
        <div class="stars" >
          <div class="stars2">      
          </div>
        </div>
      </div>


      <MastheadImage>
        <>
          <Image
            src={img}
            alt="My Image"
            width={300}
            height={300}
          />
        </>
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