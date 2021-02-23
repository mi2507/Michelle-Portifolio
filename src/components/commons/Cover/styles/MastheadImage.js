import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';



const MastheadImage = styled.header`
/* border-radius:20px; */
    
    ${breakpointsMedia({
        xs: css`
            padding: 20px 0;
        `,
        md: css`
            /* padding: 16% 0; */
        `,
        xl: css`
            /* height: 18vh; */
            max-height: 100vh;
        `,
    })}
`;

export default MastheadImage;