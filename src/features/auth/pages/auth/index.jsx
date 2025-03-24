import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { Container, ImageContainer, FormContainer, FormWrapper, SubmitButton } from './auth.styles';
import { CustomForm } from '../../../../shared/components/CustomForm/CustomForm';
import { useAuthForm } from '../../hooks/useAuthForm';
import { fieldsAuthUser } from '../../constants/filedsAuthUser';
import { validationAuthUserSchema } from '../../helpers/validationAuthUserSchema';

export const Auth = () => {
  const { onSubmit, isLoading } = useAuthForm();

  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <FormWrapper>
          <CustomForm
            fields={fieldsAuthUser}
            onSubmit={onSubmit}
            validationSchema={validationAuthUserSchema}
            buttonText={
              isLoading ? (
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'white' }} />} />
              ) : (
                'Entrar'
              )
            }
            CustomButton={SubmitButton}
            fullWidth
          />
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};
