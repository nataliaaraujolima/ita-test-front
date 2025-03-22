import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { listUsers } from '../api/listUsers.api';

export const useUserList = (page, per_page) => {
  return useQuery({
    queryKey: ['users', page, per_page],
    queryFn: () => listUsers(page, per_page),
    placeholderData: keepPreviousData,
  });
};
