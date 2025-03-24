import React from 'react';
import { CustomForm } from '../../../../shared/components/CustomForm/CustomForm';
import { useHelpers } from '../../helpers/useHelpers';
import { fieldsAddUser } from '../../constants/fieldsAddUser';

export const AddUserForm = () => {
  const { validationAddUserSchema } = useHelpers();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onSubmit = (data) => {
    console.log(data);
    return {
      email: data.email,
      password: data.password,
    };
  };

  return (
    <CustomForm
      fields={fieldsAddUser}
      onSubmit={onSubmit}
      buttonText="Cadastrar"
      layout={layout}
      validationSchema={validationAddUserSchema}
    />
  );
};
