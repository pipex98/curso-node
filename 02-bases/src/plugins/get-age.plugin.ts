// const getAgePlugin = require('get-age');

export const getAge = ( birthAge:string ) => {

  // return getAgePlugin(birthAge);
  var today = new Date();
  var birth = new Date(birthAge);
  var age = today.getFullYear() - birth.getFullYear();

  // difference in months between the current date and the birthday
  var differencesMonths = today.getMonth() - birth.getMonth();

  if (differencesMonths < 0 || (differencesMonths === 0 && today.getDate() < birth.getDate())) {
      age--;
  }

  return age;

};

// module.exports = {
//   getAge,
// }