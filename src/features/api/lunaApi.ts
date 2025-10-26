import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (h, { getState: _getState }) => {
      const token = "";
      if (token) h.set('authorization', `Bearer ${token}`);
      return h;
    },
  }),
  tagTypes: ['Profile','Cart','Products','Product'],
  endpoints: () => ({}),
});
