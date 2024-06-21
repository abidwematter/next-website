import axios from 'axios';

export default function HttpService() {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

  let baseUrlpath = 'https://api.we-matter.com/'
  
  // let baseUrlpath = 'https://website.we-matter.com';
  
  return {
    
    /**
     * Get Http Request
     * @param {*} url 
     * @returns 
     */
    GET: function (url) {
      url = baseUrlpath + url;
      return axios.get(url)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },

    /**
     * Post Http Request
     * @param {*} url 
     * @param {*} data 
     * @returns 
     */
    POST: function (url, data) {
      url = baseUrlpath + url;
      return axios.post(url, data, { headers })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },

     /**
     * put Http Request
     * @param {*} url 
     * @param {*} data 
     * @returns 
     */
     PUT: function (url, data) {
      url = baseUrlpath + url;
      return axios.post(url, data, { headers })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },

    /**
     * delete http request
     * @param {*} url 
     * @returns 
     */
    DELETE: function (url) {
      url = baseUrlpath + url;
      return axios.delete(url, { headers })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
  };
}
