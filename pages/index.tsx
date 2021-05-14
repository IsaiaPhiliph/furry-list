import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import AnimeItem from "../components/AnimeItem";
import Loading from "../components/Loading";
import SearchResults from "../components/SearchResults";
import AnimeSearchResult from "../types/AnimeSearchResult";
import { Anime } from "./../types/AnimeSearchResult";

export default function Home() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const [results, setResults] = useState<AnimeSearchResult>(null);
    const getSearchResults = async (search: String) => {
        setLoading(true);
        const res = await fetch(
            `https://api.jikan.moe/v3/search/anime?q=${search}&page=1`
        );
        const data: AnimeSearchResult = await res.json();
        console.log(data.results);
        console.log(
            `%cMaking request to api%c\nCached = ${data.request_cached.toString()}\nTime to expire cache: ${
                data.request_cache_expiry / 60
            }mins`,
            "background-color:orange; color:#333; padding:5px; font-size: 1.5rem; text-transform:uppercase; font-weight:bold",
            "background-color:green; font-size:1.2rem; font-weight:bold"
        );
        return data;
    };

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        const data = await getSearchResults(search);
        setResults(data);
        setLoading(false);
    };

    return (
        <div>
            <Head>
                <title>Mi furry list</title>
                <meta
                    name="description"
                    content="The best Anime and Manga community"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100">
                {loading && <Loading />}
                <form>
                    <input
                        type="text"
                        placeholder="Search any Anime"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit}>
                        Search
                    </button>
                </form>
                <SearchResults result={results} />
            </main>
        </div>
    );
}
