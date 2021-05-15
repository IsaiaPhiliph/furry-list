import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import AnimeItem from "../components/AnimeItem";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import SearchResults from "../components/SearchResults";
import { getSearchResults } from "../hooks/api";
import { AnimeSearchResult } from "../types/interfaces";
import { Anime } from "../types/interfaces";

export default function Home() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<AnimeSearchResult>(null);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");
    const [data, setData] = useState<AnimeSearchResult>(null);

    useEffect(() => {
        (async () => {
            search &&
                setResults(await getSearchResults(search, page, setError));
        })();
    }, [page]);

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = await getSearchResults(search, page, setError);
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
                {error && <span>{error}</span>}
                {results && (
                    <Pagination
                        page={page}
                        lastPage={results.last_page}
                        setPage={setPage}
                    />
                )}
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
