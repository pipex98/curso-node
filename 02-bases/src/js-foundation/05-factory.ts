import { getAge } from '../plugins/get-age.plugin';
// const { getAge } = require('../plugins/get-age.plugin');
// const { getUUID } = require('../plugins/get-id.plugin');

interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthDate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakerPersonOptions) => {

  return ({ name, birthDate }: PersonOptions) => {

  return {
    id: getUUID(),
    name: name,
    birthDate,
    age: getAge(birthDate)
  };

};

}


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