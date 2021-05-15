import { SetStateAction } from "react";
import { AnimeSearchResult } from "../types/interfaces";

export const getSearchResults = async (
    search: string,
    page: number,
    setError: Function
) => {
    try {
        // console.log(
        //     `https://api.jikan.moe/v3/search/anime?q=${search}&page=${page}`
        // );
        const res = await fetch(
            `https://api.jikan.moe/v3/search/anime?q=${search}&page=${page}`
        );
        const data: AnimeSearchResult = await res.json();
        // console.log(
        //     `%cMaking request to api%c\nCached = ${data.request_cached.toString()}\nTime to expire cache: ${
        //         data.request_cache_expiry / 60
        //     }mins\nData:`,
        //     "background-color:orange; color:#333; padding:5px; font-size: 1.5rem; text-transform:uppercase; font-weight:bold",
        //     "background-color:green; font-size:1.2rem; font-weight:bold",
        //     data
        // );
        return data;
    } catch (err) {
        setError(err.message);
        return;
    }
};

export const getAnimeDetails = async (id: number): Promise<any> => {
    try {
        // console.log(
        //     `Making request to https://api.jikan.moe/v3/anime/${id}/ on the server`
        // );
        const res = await fetch(`https://api.jikan.moe/v3/anime/${id}/`);
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        // console.log(error);
        return;
    }
};
