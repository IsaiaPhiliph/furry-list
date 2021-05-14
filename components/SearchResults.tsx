import AnimeSearchResult from "../types/AnimeSearchResult";
import AnimeItem from "./AnimeItem";

interface Props {
    result: AnimeSearchResult;
}

function SearchResults({ result }: Props) {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {result &&
                result.results?.map((result) => (
                    <AnimeItem result={result} key={result.mal_id} />
                ))}
        </div>
    );
}

export default SearchResults;
