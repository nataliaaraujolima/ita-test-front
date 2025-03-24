import React from 'react';
import { ModalBlur } from '../../../../shared/components/ModalBlur/ModalBlur';
import { Button } from 'antd';

export const AddUserDialog = ({ openAddUserDialog, closeaddUserDialog }) => {
  return (
    <ModalBlur isOpen={openAddUserDialog} onClose={closeaddUserDialog}>
      <h1>Adicionar usuário</h1>
      <p>Insira as informações abaixo:</p>
      <Button type="primary" onClick={closeaddUserDialog}>
        Adicionar
      </Button>
    </ModalBlur>
  );
};
