// const { getAge } = require('../plugins/get-age.plugin');
// const { getUUID } = require('../plugins/get-id.plugin');


const buildMakePerson = ({ getUUID, getAge }) => {

  return ({ name, birthDate }) => {

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

module.exports = {
  buildMakePerson,
}