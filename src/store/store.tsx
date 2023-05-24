import { configureStore } from '@reduxjs/toolkit'
import rickMortySlice from './slices/rickAndMorty';

export const store = configureStore({
    reducer: {
        rickmorty: rickMortySlice
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;