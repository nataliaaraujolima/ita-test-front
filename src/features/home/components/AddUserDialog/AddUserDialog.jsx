import React from 'react';
import { ModalBlur } from '../../../../shared/components/ModalBlur/ModalBlur';
import { AddUserForm } from '../AddUserForm/AddUserForm';

export const AddUserDialog = ({ openAddUserDialog, closeaddUserDialog }) => {
  return (
    <ModalBlur isOpen={openAddUserDialog} onClose={closeaddUserDialog}>
      <AddUserForm />
    </ModalBlur>
  );
};
