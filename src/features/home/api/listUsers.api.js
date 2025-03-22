import axios from 'axios';

export const listUsers = async (page = 1, per_page = 10) => {
  const { data } = await axios.get('/users', {
    params: {
      page,
      per_page,
    },
  });
  return data;
};
