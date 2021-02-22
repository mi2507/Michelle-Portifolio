import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const MastheadImage = styled.header`
  /* font-family: 'Akaya Telivigala', cursive; */
    background-image: url('');
  
    background-color:#ffffff;
    /* background-attachment: scroll;
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color:#ffffff; */
    ${breakpointsMedia({
        xs: css`
            padding: 20px 0;
        `,
        md: css`
            /* padding: 16% 0; */
        `,
        xl: css`
            height: 18vh;
            max-height: 100vh;
        `,
    })}
`;

export default MastheadImage;