/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line quotes
import React from "react";
// eslint-disable-next-line quotes
import styled, { css } from 'styled-components';
import Card from '../Card';
import SectionTitle from './styles/SectionTitle';
// eslint-disable-next-line quotes
import { Grid } from "../../foundations/layout/Grid";
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const cards = [
  {
    title: 'Projeto Report',
    image: '/imagens/proj1.jpg',
    text: 'Projeto Report.',
    link: 'https://github.com/mi2507',
    destaque: false,
  },
  {
    title: 'Projeto Report',
    image: '/imagens/proj2.jpg',
    text: 'Projeto Report.',
    link: 'https://github.com/mi2507',
    destaque: false,
  },
  {
    title: 'Instalura',
    image: '/imagens/instaluranc.jpg',
    text: 'instgram alura',
    link: 'https://github.com/mi2507/instalura',
    destaque: false,
  },
  {
    title: 'Quiz-Vingadores',
    image: '/imagens/vingadores-ultimato-marvel.jpg',
    text: 'Projeto alura quiz.',
    link: 'https://aluraquiz-base-git-main-aluraquiz-base1.vercel.app/',
    destaque: true,
  },
];
const WrapperProjetosBase = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* padding: 12px 0; */
    ${breakpointsMedia({
    md: css`12 px 0;
      `,
  })}
    background-color: #545454;;
    background: #ffffff url('/images/gray-honeycomb-empty.svg') no-repeat right bottom;
    background-size: 300px auto;
    & > div {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  `;
export default function WrapperProjetos() {
  return (
    <WrapperProjetosBase>
           <SectionTitle
           variant="title"
           tag="h3"
           color="tertiary.main"
           textAlign={{
             xs: 'center',
             md: 'left',
           }}
           >
             Meus projetos
</SectionTitle>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              value={12}
              display="flex"
              justifyContent="center"
            >
            </Grid.Col>
          </Grid.Row>
          <Grid.Row order={{ xs: 2, md: 0 }}>
            {cards.map((card) => {
              if (!card.destaque) {
                return (
                  <Grid.Col
                    value={{
                      xs: 12,
                      md: 8,
                      lg: 4,
                    }}
                    key={card.title}
                    display="flex"
                    justifyContent="center"
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      text={card.text}
                      link={card.link}
                      destaque={card.destaque}
                    />
                  </Grid.Col>
                );
              }
              return null;
            })}
          </Grid.Row>
          <Grid.Row order={0}>
            {cards.map((card) => {
              if (card.destaque) {
                return (
                  <Grid.Col
                    value={12}
                    key={card.title}
                    display="flex"
                    justifyContent="center"
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      text={card.text}
                      link={card.link}
                      destaque={card.destaque}
                    />
                  </Grid.Col>
                );
              }
              return null;
            })}
          </Grid.Row>
        </Grid.Container>
      </WrapperProjetosBase>
  );
}
