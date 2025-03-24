import styled from 'styled-components';
import { Button, Input as InputAntd } from 'antd';

export const Container = styled.div`
  display: flex;
  height: 100vh;

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
  justify-content: center;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex: 1;
    padding: 16px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 592px;
  padding: 40px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 24px;
  width: 100%;
  height: 48px;
  background-color: #ffd600;
  color: black;
  font-weight: 600;
  border-radius: 6px;
  border: none;

  &:hover,
  &:focus {
    background-color: #ffce00;
    color: black;
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
