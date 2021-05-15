import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import AnimeItem from "../components/AnimeItem";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { getSearchResults } from "../hooks/api";
import { AnimeSearchResult } from "../types/interfaces";
import { Anime } from "../types/interfaces";

export default function Home() {
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
            <main className="bg-gray-100 min-h-screen flex items-center justify-center w-full p-4">
                <SearchBar />
            </main>
        </div>
    );
}
