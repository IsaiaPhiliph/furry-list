import { AnimeSearchResult } from "../types/interfaces";
import AnimeItem from "./AnimeItem";

interface Props {
    result: AnimeSearchResult;
}

function SearchResults({ result }: Props) {
    return (
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5  gap-6  p-4 cls">
            {result &&
                result.results?.map((result) => (
                    <AnimeItem result={result} key={result.mal_id} />
                ))}
        </div>
    );
}

export default SearchResults;
