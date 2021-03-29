/* eslint-disable func-names */
/* eslint-disable indent */

import { breakpointsMedia } from './breakpointsMedia';

function propToStyle(propName) {
  // eslint-disable-next-line func-names
  // eslint-disable-next-line consistent-return
  return function (props) {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }
   // eslint-disable-next-line indent
   if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }
  };
}
export default propToStyle;
