import { configureStore } from '@reduxjs/toolkit'
import {servicesAPI} from "@/redux/API/serviceAPI/serviceAPI";
import {setupListeners} from "@reduxjs/toolkit/query";
import {clinicsAPI} from "@/redux/API/clinicsAPI";
import {doctorsAPI} from "@/redux/API/doctorsAPI";


export const store = configureStore({
    reducer: {
        [servicesAPI.reducerPath]: servicesAPI.reducer,
        [clinicsAPI.reducerPath]: clinicsAPI.reducer,
        [doctorsAPI.reducerPath]: doctorsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([servicesAPI.middleware,clinicsAPI.middleware,doctorsAPI.middleware]),
});
setupListeners(store.dispatch)

