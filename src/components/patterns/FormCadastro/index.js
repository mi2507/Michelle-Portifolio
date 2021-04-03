/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Lottie } from '@crello/react-lottie';
import { Box } from '../../commons/Box';
// eslint-disable-next-line import/extensions
import { Grid } from '../../foundations/layout/Grid';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import { Text } from '../../foundations/Text';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: ' DONE',
  ERROR: 'ERROR',
};

// eslint-disable-next-line space-before-blocks
function FormContent(){
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  // eslint-disable-next-line space-before-blocks
  function handleChange(event){
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }
  // eslint-disable-next-line max-len
  const isFormInvalid = userInfo.name.length === 0 || userInfo.email.length === 0 || userInfo.message.length === 0;

  return (
        <form onSubmit={(event) => {
          event.preventDefault();

          setIsFormSubmited(true);

          const userDTO = {
            name: userInfo.name,
            email: userInfo.email,
            message: userInfo.message,
          };
          // eslint-disable-next-line no-console
          fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDTO),
          })
            .then((respostaDoServidor) => {
              if (respostaDoServidor.ok) {
                return respostaDoServidor.json();
              }
              throw new Error('It was not possible to send your message');
            })
            .then((respostaConvertidaEmObjeto) => {
              setSubmissionStatus(formStates.DONE);
              console.log('resp teste');
            })
            .catch((error) => {
              setSubmissionStatus(formStates.ERROR);
              console.log('error');
            });
        }}
        >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Send your message
      </Text>
            <div>
                <TextField
                  placeholder="seu nome"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                  placeholder="seu E-mail"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                  placeholder="sua mensagem"
                  name="message"
                  value={userInfo.message}
                  onChange={handleChange}
                />
            </div>

            <Button
              variant="primary.main"
              backgroundColor="#545454"
              type="submit"
              disabled={isFormInvalid}
              fullWidth
            >
                enviar &gt;
            </Button>
            { isFormSubmited && submissionStatus === formStates.DONE && (
               <Box>
               <Lottie
                 width="150px"
                 height="150px"
                 config={{ animationData: successAnimation, loop: false, autoplay: true }}
               />

               </Box>
            )}

           {isFormSubmited && submissionStatus === formStates.ERROR && (
             <Box
               display="flex"
               justifyContent="center"
               alignItems="center"
             >
               <Lottie
                 width="150px"
                 height="150px"
                 config={{ animationData: errorAnimation, loop: false, autoplay: true }}
               />

             </Box>
           )}

        </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
      <Grid.Row
        marginLeft={0}
        marginRight={0}
        flex={1}
        justifyContent="flex-end"
      >
        <Grid.Col
          display="flex"
          paddingRight={{ md: '0' }}
          flex={1}
          value={{ xs: 12, md: 5, lg: 4 }}
        >
          <Box
            boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            backgroundColor="white"
            borderRadius="8px"
            flex={1}
            padding={{
              xs: '16px',
              md: '56px',
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <FormContent />
          </Box>
        </Grid.Col>
      </Grid.Row>
  );
}
