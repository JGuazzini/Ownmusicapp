import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
          prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b1262ca7dfmshdbcb9b4180cbee5p142ea5jsn37f3f29ede21');

            return headers;
          },
        }),
        endpoints: (builder) => ({
          getTopCharts: builder.query({ query: () => '/charts/world' })
        })
    });

    export const {
      useGetTopChartsQuery,
    } = shazamCoreApi;