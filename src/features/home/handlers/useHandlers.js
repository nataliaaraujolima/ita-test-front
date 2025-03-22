export function useHandlers(data, paginationData) {
  const handleMapUsers = (users) => {
    return users?.map((user) => ({
      id: user.id,
      email: user.email,
      avatar: user.avatar,
      firstName: user.first_name,
      lastName: user.last_name,
      name: `${user.first_name} ${user.last_name}`,
    }));
  };

  const handleFormatPagination = (pagination) => {
    return {
      page: pagination?.page,
      per_page: pagination?.per_page,
      total: pagination?.total,
      total_pages: pagination?.total_pages,
    };
  };

  const mappedUsers = handleMapUsers(data);
  const mappedPagination = handleFormatPagination(paginationData);

  return {
    mappedUsers,
    mappedPagination,
  };
}
