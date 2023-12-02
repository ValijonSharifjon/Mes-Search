import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const servicesAPI = createApi({
    reducerPath: "servicesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),
    endpoints: (builder) => ({
        services: builder.query({
            query: () => `/services`,
        }),
    }),
});
export const {useServicesQuery} = servicesAPI;
