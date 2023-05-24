import {useEffect, useState} from "react";
import axios from "axios";

export interface EpisodeData {
    error: string;
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
}

export interface FetchEpisodeResponse {
    data: EpisodeData | null;
    loading: boolean;
    error: string;
}

const useFetchEpisode = (page: string): FetchEpisodeResponse => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        axios.get(page).then(resp => {
            setError(resp.data.error);
            setData(resp.data);
            setLoading(false);
        });


    }, [page])




    return {data, loading, error}
}

export default useFetchEpisode;

