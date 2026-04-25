"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const getUUID = () => {
    return crypto.randomUUID();
};
exports.getUUID = getUUID;
// module.exports = {
//   getUUID,
// }
