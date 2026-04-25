"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
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
    const user = users.find((user) => user.id === id);
    (user)
        ? callback(undefined, user)
        : callback(`USUARIO no encontrado ${id}`);
};
exports.getUserById = getUserById;
