import { Form as FormAntd, Input as InputAntd, Button as ButtonAntd } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-image: url('https://images7.alphacoders.com/729/729209.jpg');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    flex: none;
    height: 200px;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex: 1;
    padding: 16px;
  }
`;

export const Form = styled(FormAntd)`
  width: 720px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
`;

export const StyledFormItem = styled(FormAntd.Item)`
  margin-bottom: 16px;

  .ant-form-item-label label::before {
    display: inline-block;
    margin-right: 4px;
    color: red;
    font-size: 14px;
    content: '*';
  }
`;

export const InputEmail = styled(InputAntd)`
  font-size: 18px;
  height: 50px;
  padding: 10px;
  border: 1px solid #d9d9d9;

  @media (max-width: 768px) {
    font-size: 16px;
    height: 40px;
  }
`;

export const InputPassword = styled(InputAntd.Password)`
  font-size: 18px;
  height: 50px;
  padding: 10px;
  border: 1px solid #d9d9d9;

  input {
    font-size: 18px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    height: 40px;
  }
`;

export const SubmitButton = styled(ButtonAntd)`
  width: 100%;
  height: 50px;
  background-color: #ffdc00;
  border-color: #ffdc00;
  color: #000;
  font-weight: bold;
  font-size: 18px;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: #ffe333;
    border-color: #ffe333;
  }

  @media (max-width: 768px) {
    height: 40px;
    font-size: 16px;
  }
`;
