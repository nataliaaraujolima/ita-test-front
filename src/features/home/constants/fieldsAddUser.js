export const fieldsAddUser = [
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    placeholder: 'Digite seu email',
    rules: {
      required: 'Este campo é obrigatório',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Email inválido',
      },
    },
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
    rules: {
      required: 'Este campo é obrigatório',
      minLength: {
        value: 6,
        message: 'A senha deve ter pelo menos 6 caracteres',
      },
    },
  },
];
