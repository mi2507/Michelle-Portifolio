import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';



const MastheadImage = styled.header`

    
    ${breakpointsMedia({
        xs: css`
            padding: 20px 0;
        `,
        md: css`
        `,
        xl: css`
            max-height: 100vh;
        `,
    })}
`;

export default MastheadImage;