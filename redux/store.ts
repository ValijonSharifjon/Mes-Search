import { configureStore } from '@reduxjs/toolkit'
import {servicesAPI} from "@/redux/API/serviceAPI/serviceAPI";
import {setupListeners} from "@reduxjs/toolkit/query";
import {clinicsAPI} from "@/redux/API/clinicsAPI";


export const store = configureStore({
    reducer: {
        [servicesAPI.reducerPath]: servicesAPI.reducer,
        [clinicsAPI.reducerPath]: clinicsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([servicesAPI.middleware,clinicsAPI.middleware]),
});
setupListeners(store.dispatch)

