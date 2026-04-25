"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthDate }) => {
        return {
            id: getUUID(),
            name: name,
            birthDate,
            age: getAge(birthDate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const buildPerson = ({ name, birthDate }) => {
//   return {
//     id: getUUID(),
//     name: name,
//     birthDate,
//     age: getAge(birthDate)
//   };
// };
// const obj = { name: 'Felipe', birthDate: '1998-12-12' };
// const john = buildPerson(obj);
// console.log(john);
// module.exports = {
//   buildMakePerson,
// }
