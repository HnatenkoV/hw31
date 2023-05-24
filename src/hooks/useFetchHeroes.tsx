import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface HeroData {
    error: string;
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
}

export interface FetchHeroesResponse {
    data: HeroData | null;
    loading: boolean;
    error: string;
}

const useFetchHeroes = (page: string): FetchHeroesResponse => {
    const [data, setData] = useState<HeroData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        axios
            .get(page)
            .then((response: AxiosResponse<HeroData>) => {
                setData(response.data);
                console.log(response.data);
                setError(response.data.error);
                setLoading(false);
            });
    }, [page]);

    return { data, loading, error };
};

export default useFetchHeroes;
