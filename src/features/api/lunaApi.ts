import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "@/store/store";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (h, { getState }) => {
      // const token = (getState() as RootState).auth.token;
      const token = "";
      if (token) h.set('authorization', `Bearer ${token}`);
      return h;
    },
  }),
  tagTypes: ['Profile','Cart','Products','Product'],
  endpoints: () => ({}),
});
