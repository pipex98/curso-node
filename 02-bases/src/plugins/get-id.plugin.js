

const getUUID = () =>  {
  return crypto.randomUUID();
}

module.exports = {
  getUUID,
}