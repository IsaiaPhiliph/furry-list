import { Pagination } from "@material-ui/lab";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import SearchResults from "../../components/SearchResults";
import { getSearchResults } from "../../hooks/api";
import { AnimeSearchResult } from "../../types/interfaces";

function SearchResultsPage() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<AnimeSearchResult>(null);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const router = useRouter();
    const query: any = router.query.query;
    console.log(query);
    useEffect(() => {
        (async () => {
            if (query) {
                setLoading(true);
                console.log(
                    "%cmaking search request",
                    "background-color:white;color:#333"
                );
                query &&
                    setResults(await getSearchResults(query, page, setError));
            }
            setLoading(false);
        })();
    }, [page, query]);

    return (
        <main className="bg-gray-100 flex flex-col items-center">
            {loading && <Loading />}
            {error && <span>{error}</span>}
            {results && (
                <Pagination
                    count={results.last_page < page ? page : results.last_page}
                    page={page}
                    onChange={(e, v) => setPage(v)}
                />
            )}

            <SearchResults result={results} />
        </main>
    );
}

export default SearchResultsPage;
