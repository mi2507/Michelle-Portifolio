import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const Masthead = styled.header`
  font-family: 'Akaya Telivigala', cursive;
    background-image: url('https://images.unsplash.com/photo-1502679726485-931beda67f88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color:#ffffff;

    img{
        border-radius:100%;
  
    width:150px;
    height:156px;
    }
   
    ${breakpointsMedia({
        xs: css`
            padding: 90px 0;
        `,
        md: css`
            padding: 16% 0;
        `,
        xl: css`
            height: 18vh;
            max-height: 100vh;
        `,
    })}
`;

export default Masthead;