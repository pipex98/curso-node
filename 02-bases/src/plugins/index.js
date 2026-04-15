const { getAge } = require('../plugins/get-age.plugin');
const { getUUID } = require('../plugins/get-id.plugin');
const { http } = require('./http-client.plugin');

module.exports = {
  getAge,
  getUUID,
  http
}