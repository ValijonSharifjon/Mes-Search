import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const clinicsAPI = createApi({
    reducerPath: "clinicsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),
    endpoints: (builder) => ({
        clinics: builder.query({
            query: () => `/clinics`,
        }),
    }),
});
export const {useClinicsQuery} = clinicsAPI;
