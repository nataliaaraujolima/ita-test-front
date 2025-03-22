export function filteredUsers(dataMapped, search) {
  return search.length > 0
    ? dataMapped.filter((user) => user && user.name && user.name.includes(search))
    : dataMapped;
}
