import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const doctorsAPI = createApi({
    reducerPath: "doctorsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),
    endpoints: (builder) => ({
        doctors: builder.query({
            query: () => `/doctors`,
        }),
    }),
});
export const {useDoctorsQuery} = doctorsAPI;
