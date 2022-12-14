import axios from 'axios';

import { clearStorage } from '../utils/storage';

const token = localStorage.getItem('accessToken');

export const axiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-assignment-week-4-1-team-3-server-fe6r.vercel.app',
  headers: token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {},

  paramsSerializer: function (params) {
    return new URLSearchParams(params).toString();
  },
  timeout: 3000,
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    try {
      const errResponseStatus = error.response.status;
      if (errResponseStatus === 401) {
        clearStorage();
        window.location.replace('/login');
      }
    } catch (e) {
      console.error(e);
    }
  }
);
