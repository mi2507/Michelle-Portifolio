/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import { Text } from '../src/components/foundations/Text/index';
import { Button } from '../src/components/commons/Button';
import { Grid } from '../src/components/foundations/layout/Grid/index';
import Projects from '../src/components/commons/Projects';
import { Box } from '../src/components/commons/Box';
import Modal from '../src/components/commons/Modal';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false); 
  return (
    <Box style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >

  <Modal
    isOpen={isModalOpen}
    onClose={() => {
          setModalState(false);
    }}
  >
        {(propsDoModal) => (
          <Box
            backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <div>
              Nosso conteúdo pro modal
            </div>
          </Box>
        )}
      </Modal>

      <Menu />
    
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
       
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 4 }}
          >
            <img
              style={{
                display: 'block', 
                margin: 'auto', 
                width: '222px', 
                height: '222px', 
                borderRadius: '108px', 
                marginTop: '20px',
              }}
              src="https://instagram.fgru5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123015588_186742212991712_5620195857012912199_n.jpg?tp=1&_nc_ht=instagram.fgru5-1.fna.fbcdn.net&_nc_ohc=ipSOhx3EbxsAX9Bo6K0&oh=b5edd64cecd69ab04df995872681d5d1&oe=607B0B0B"
            />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 7 }}
          >
            <div>
              <Text
                variant="title"
                tag="h3"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Michelle Regina | Front-end Developer
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br />
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                onClick={() => {
                  // eslint-disable-next-line no-const-assign
                  setModalState(!isModalOpen);
                }}
              >
                Send Message
              </Button>
            </div>
          </Grid.Col>
        </Grid.Row>
       
      </Grid.Container>
      <Projects />

      <Footer />
    </Box>
  );
}
