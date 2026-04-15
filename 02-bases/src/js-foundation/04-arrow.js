const users = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'John Doe'
  }
];

const getUserById = (id, callback) => {
  // const user = users.find( (user) => {
  //   return user.id === id;
  // });

  const user = users.find( (user) => user.id === id);

  ( user ) ? callback(null, user) : callback(`USUARIO no encontrado ${id}`);

}

module.exports = {
  getUserById,
}