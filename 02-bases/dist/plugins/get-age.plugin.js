"use strict";
// const getAgePlugin = require('get-age');
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthAge) => {
    const today = new Date();
    const birth = new Date(birthAge);
    let age = today.getFullYear() - birth.getFullYear();
    // difference in months between the current date and the birthday
    const differencesMonths = today.getMonth() - birth.getMonth();
    // flag to indicate whether the birthday has already passed or not.
    const isBeforeBirthdayDay = differencesMonths === 0 && today.getDate() < birth.getDate();
    if (differencesMonths < 0 || isBeforeBirthdayDay) {
        age--;
    }
    return age;
    // return getAgePlugin(birthAge);
};
exports.getAge = getAge;
// module.exports = {
//   getAge,
// }
