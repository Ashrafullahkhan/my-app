import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import RTKBaseQuery from '../../../constants/RTKBaseQuery';

export const mortyApi = createApi({
  reducerPath: 'mortyApi',
  baseQuery: fetchBaseQuery(RTKBaseQuery),
  tagTypes: ['Morty'],
  endpoints: (builder) => ({
    getMorty: builder.query({
      query: () => `character`,
      providesTags: ['Morty'],
    }),
  }),
});

export const { useGetMortyQuery } = mortyApi;
