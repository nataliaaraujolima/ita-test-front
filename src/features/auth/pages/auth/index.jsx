import React from 'react';
import { Controller } from 'react-hook-form';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useAuthForm } from '../../hooks/useAuthForm';
import {
  Container,
  ImageContainer,
  SubmitButton,
  Form,
  StyledFormItem,
  FormContainer,
  InputEmail,
  InputPassword,
} from './auth.styles';

export const Auth = () => {
  const { handleSubmit, control, errors, isLoading, onSubmit } = useAuthForm();

  return (
    <Container>
      <ImageContainer />

      <FormContainer>
        <Form
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={handleSubmit(onSubmit)}
        >
          <StyledFormItem
            label=" Email"
            validateStatus={errors.email ? 'error' : ''}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'O email é obrigatório',
              }}
              render={({ field }) => (
                <InputEmail {...field} placeholder="Seu email ou usuário" disabled={isLoading} />
              )}
            />
          </StyledFormItem>

          <StyledFormItem
            label="Senha"
            validateStatus={errors.password ? 'error' : ''}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'A senha é obrigatória',
              }}
              render={({ field }) => (
                <InputPassword {...field} placeholder="Sua senha" disabled={isLoading} />
              )}
            />
          </StyledFormItem>

          <SubmitButton type="primary" htmlType="submit" disabled={isLoading}>
            {isLoading ? (
              <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'white' }} />} />
            ) : (
              'Entrar'
            )}
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};
