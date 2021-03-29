/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import React from 'react';
import { CardWrapper } from './styles/CardWrapper';
import { Text } from '../../foundations/Text';
import Link from '../Link';
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line object-curly-newline
export default function Card({ title, image, text, link, destaque }) {
	return (
  <>
	{(destaque === true && (
				<CardWrapper.CardDestaque>
					<CardWrapper.CardImage as="a" href={link} target="_blank" style={{ textDecoration: 'none' }}>
						<img src={image} alt={`Imagem do projeto ${title}`} />
					</CardWrapper.CardImage>
					<div>
						<CardWrapper.CardTitle>{title}</CardWrapper.CardTitle>
						<CardWrapper.CardText>
							{text}
							<Link href={link} target="_blank">
								<Text variant="link">
									Click aqui e veja o repositório
					{/* <img src="/images/arrow.svg" alt="Link para o repositório" /> */}
								</Text>
							</Link>
						</CardWrapper.CardText>
						<CardWrapper.CardDestaqueLabel>Destaque</CardWrapper.CardDestaqueLabel>
					</div>
				</CardWrapper.CardDestaque>
			)) || (
					<CardWrapper>
						<CardWrapper.CardImage as="a" href={link} target="_blank" style={{ textDecoration: 'none' }}>
							<img src={image} alt={`Imagem do projeto ${title}`} />
						</CardWrapper.CardImage>
  <CardWrapper.CardTitle>
  {title}
  </CardWrapper.CardTitle>
					</CardWrapper>
				)}
		</>
	);
}
