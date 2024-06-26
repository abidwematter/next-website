// services/httpService.js

const baseUrlpath = 'https://api.we-matter.com/';
// const baseUrlpath = 'https://website.we-matter.com';

const headers = {
  "Content-Type": "application/x-www-form-urlencoded"
};


const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

export default function HttpFetchService() {


  return {
  GET: async (url) => {
    url = baseUrlpath + url;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  POST: async (url, data) => {
    url = baseUrlpath + url;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  PUT: async (url, data) => {
    url = baseUrlpath + url;
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  DELETE: async (url) => {
    url = baseUrlpath + url;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: headers
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};
}