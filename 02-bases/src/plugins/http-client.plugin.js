const axios = require("axios");

const buildHttpClient = (headers) => {

  return {
    get: async (url) => {
      // const resp = await fetch(url);
      // return await resp.json();
      const { data } = await axios.get(url, headers);
      return data;
    },

    post: async (url, body) => { },
    put: async (url, body) => { },
    delete: async (url, body) => { }
  }

}


const httpClientPlugin = {

  get: async (url) => {
    // const resp = await fetch(url);
    // return await resp.json();
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url, body) => { },
  put: async (url, body) => { },
  delete: async (url, body) => { }
};

module.exports = {
  http: httpClientPlugin,
  buildHttpClient
};