import { CustomException } from '../../../utils/customException';
import axios from '../../auth/services/axios';
export const listUsers = async (page = 1, per_page = 10) => {
  try {
    const { data } = await axios.get('/users', {
      params: { page, per_page },
    });
    return data;
  } catch (error) {
    throw new CustomException(error);
  }
};
