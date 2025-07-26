import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./cars/carsSlice.js"
import filterReduser from "./filters/filtersSlice.js"
import favoritesReduser from "./favorites/favoritesSlice.js"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'favorite_car',
    storage,
}
const persistedFavoritesReducer = persistReducer(persistConfig, favoritesReduser)

export const store = configureStore({
    reducer: {
        cars: carReducer,
        filters: filterReduser,
        favorites: persistedFavoritesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);

