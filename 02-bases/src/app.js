// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring')
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { getAge, getUUID } = require('./plugins');


const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(4)
  .then((pokemon) => console.log({ pokemon }) )
  .catch( (err) => console.log(err) )
  .finally( () => console.log('Finalmente'));

// ! Referencia a la función factory y uso

// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge })

// const obj = { name: 'Felipe', birthDate: '1998-12-12' };

// const felipe = makePerson(obj);

// console.log(felipe);

// console.log(emailTemplate);

// const id = 1;

// getUserById(id, ( error, user ) => {

//    if (error) {
//     throw new Error(`User not found with id ${id}`);
//   }

//   getUserById(2, (error, user2) => {

//     if (error) {
//       throw new Error( error );
//     }

//     console.log({user, user2});
    
//   });

// });