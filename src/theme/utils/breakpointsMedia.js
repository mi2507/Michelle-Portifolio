import { css } from 'styled-components';
import theme from '../index';

// eslint-disable-next-line import/no-named-as-default-member
const { breakpoints } = theme;

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  // eslint-disable-next-line arrow-body-style
  return breakpointsNames.map((breakpointName) => {
    return css`
    @media screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoints[breakpointName]} 
    }
  `;
  });
}
