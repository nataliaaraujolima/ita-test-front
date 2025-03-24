import { InputEmail, InputPassword } from '../pages/auth/auth.styles';

export const fieldsAuthUser = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Seu email ou usuário',
    type: 'input',
    component: InputEmail,
    required: true,
  },
  {
    name: 'password',
    label: 'Senha',
    placeholder: 'Sua senha',
    type: 'password',
    component: InputPassword,
    required: true,
  },
];
