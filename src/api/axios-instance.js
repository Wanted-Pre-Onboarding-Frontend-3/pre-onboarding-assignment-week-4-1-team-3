import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld2ZhY2VAZGNvLmNvbSIsImlhdCI6MTY2MzkxMjkzNywiZXhwIjoxNjYzOTE2NTM3LCJzdWIiOiIxMDEifQ.O7hCR2RJJy0llXItBou0iuMNcwawVJSfZCBNa6MCm40';

export const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },

  paramsSerializer: function (params) {
    return new URLSearchParams(params).toString();
  },
});
