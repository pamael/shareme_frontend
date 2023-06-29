export const userQuery = (userId) => {
  console.log('$$$$=%o', userId);
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};