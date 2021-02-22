import React from "react";
import CardWrapper from "./styles";

function Card() {
	return (
		<CardWrapper>
			<CardWrapper.Image
				
				alt="logo vingadores"
				style={{ display: 'block', margin: 'auto' }}
				src="https://i.pinimg.com/564x/14/6a/71/146a71e17dea3c62562c59cd11fde8e6.jpg"
			  />
			  
		
			<CardWrapper.Text>
               
			   <a href="https://aluraquiz-base-git-main.aluraquiz-base1.vercel.app/">Projeto quiz vingadores </a>
            </CardWrapper.Text>
		</CardWrapper>

		
		
	);
}

export default Card;

