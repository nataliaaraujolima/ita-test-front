import * as yup from 'yup';

export function useHelpers(data, paginacaoData) {
  const mappedUsers = data?.map((user) => ({
    id: user.id,
    email: user.email,
    avatar: user.avatar,
    first_name: user.first_name,
    last_name: user.last_name,
    name: `${user.first_name} ${user.last_name}`,
  }));

  const paginationData = {
    page: paginacaoData?.page,
    per_page: paginacaoData?.per_page,
    total: paginacaoData?.total,
    total_pages: paginacaoData?.total_pages,
  };

  const validationAddUserSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Este campo é obrigatório'),
  });

  return {
    mappedUsers,
    paginationData,
    validationAddUserSchema,
  };
}
