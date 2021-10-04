import axios from 'axios';

export const request = () => {
  try {
    const service = axios.create({
      baseURL: process.env.REACT_APP_API_ROOT || '',
      headers: {
        'content-type': 'application/json',
      },
    });

    return service;
  } catch (error) {
    return error;
  }
};