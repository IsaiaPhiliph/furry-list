import { useRouter } from "next/router";
import { useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState("");

    const router = useRouter();
    return (
        <form
            className="flex flex-col gap-y-4 w-full sm:max-w-lg"
            onSubmit={(e) => {
                e.preventDefault();
                if (search && search.length >= 3)
                    router.push(`/search/${search}`);
            }}
        >
            <input
                type="text"
                placeholder="Search any Anime"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="p-4 outline-none focus:ring rounded-md"
            />
            <button
                className="focus:outline-none focus:ring self-center bg-blue-600 p-4 rounded-md shadow-md text-white font-bold"
                type="submit"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;
