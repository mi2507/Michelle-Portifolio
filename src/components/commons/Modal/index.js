/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars

import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const ModalWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: stretch;
background: rgba(0,0,0,0.1);
position: fixed;
top: 0;
left:0;
right: 0;
bottom: 0;
margin: auto;
overflow: scroll;

${({ isOpen }) => {
  // eslint-disable-next-line no-undef
    if (isOpen) {
      return css`
    opacity:1;
    pointer-events: all;
`;
    }
    return css`
    opacity:0;
    pointer-events: none;
`;
  }}
`;

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types
function Modal({ isOpen, onClose, children }) {
  // eslint-disable-next-line keyword-spacing
  return(
    // eslint-disable-next-line react/react-in-jsx-scope
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        // eslint-disable-next-line no-param-reassign
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {children({
        'data-modal-safe-area': 'true',
      })}
    </ModalWrapper>
  );
}
// Modal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   children: PropTypes.func.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

export default Modal;
