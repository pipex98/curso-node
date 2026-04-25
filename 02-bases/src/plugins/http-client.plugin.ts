import axios from "axios";

// export const buildHttpClient = (headers:any) => {

//   return {
//     get: async (url:string) => {
//       const resp = await fetch(url);
//       return await resp.json();
//       const { data } = await axios.get(url, headers);
//       return data;
//     },

//     post: async (url: string, body: any) => { 
//       throw new Error('Not implemented');
//     },
//     put: async (url: string, body: any) => { 
//       throw new Error('Not implemented');
//     },
//     delete: async (url: string, body: any) => { 
//       throw new Error('Not implemented');
//     }
//   }

// }


export const httpClientPlugin = {

  get: async (url:string) => {
    // const resp = await fetch(url);
    // return await resp.json();
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url: string, body: any) => { },
  put: async (url: string, body: any) => { },
  delete: async (url: string, body: any) => { }
};