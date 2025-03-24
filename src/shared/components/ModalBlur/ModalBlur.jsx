import React from 'react';
import { createPortal } from 'react-dom';
import { ModalContent, Overlay } from './modalBlur.styles';

export const ModalBlur = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
    </Overlay>,
    document.body,
  );
};
