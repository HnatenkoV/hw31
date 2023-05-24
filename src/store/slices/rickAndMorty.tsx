import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface Character {
    name: string;
}

export interface Heroes {
    id: number;
    name: string;
    status: string;
    image: string;
}

interface Episode {
    id: number;
    name: string;
}

interface HeroesInfo {
    count: number;
    pages: number;
    prev: string;
    next: string;
    info: string;
}

interface EpisodeInfo {
    count: number;
    pages: number;
    prev: string;
    next: string;
    info: string;
}

interface ApiHeroes {
    results: Heroes[];
    info: HeroesInfo;
}

interface ApiEpisode {
    results: Episode[];
    info: EpisodeInfo;
}


interface IRickAndMortyState {
    isLoading: boolean;
    error: string | null;
    heroesInfo: HeroesInfo | null;
    episodeInfo: EpisodeInfo | null;
    listOfChar: Heroes[];
    listOfEpisode: Episode[];
    selectedChar: Character;
}

export const getCharacterAsync = createAsyncThunk(
    "rickmorty/fetchCharacters",
    async (page: number) => {
        const res = await axios(`character/?page=${page}`);
        const data = await res.data;
        await new Promise(r => setTimeout(r, 1000));
        return data;
    }
);

export const getEpisodeAsync = createAsyncThunk(
    "rickmorty/fetchEpisode",
    async (page: number) => {
        const res = await axios(`episode/?page=${page}`);
        const data = await res.data;
        return data;
    }
);

export const rickAndMortySlice = createSlice({
    name: 'rickmorty',
    initialState: {
        isLoading: false,
        error: null,
        heroesInfo: null,
        episodeInfo: null,
        listOfChar: [],
        listOfEpisode: [],
        selectedChar: { name: "none" },
    } as IRickAndMortyState,

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCharacterAsync.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCharacterAsync.fulfilled, (state, action: PayloadAction<ApiHeroes>) => {
            state.isLoading = false
            state.listOfChar = action.payload.results
            state.heroesInfo = action.payload.info
        })
        builder.addCase(getCharacterAsync.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addCase(getEpisodeAsync.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getEpisodeAsync.fulfilled, (state, action: PayloadAction<ApiEpisode>) => {
            state.isLoading = false
            state.listOfEpisode = action.payload.results
            state.episodeInfo = action.payload.info
        })
        builder.addCase(getEpisodeAsync.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        })
    },

})

export default rickAndMortySlice.reducer

