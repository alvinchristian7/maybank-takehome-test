import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const placesApi = createApi({
  reducerPath: 'placesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/places' }),
  endpoints: (builder) => ({
    getPlaces: builder.query({
      query: (str) => `?categories=commercial&filter=place:514056a7b8e9b45a40592ce0f667cdb318c0f00101f9018284580000000000c002059203055257203032&name=${str}&limit=20&apiKey=${process.env.REACT_APP_PLACES_API_KEY}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetPlacesQuery } = placesApi
