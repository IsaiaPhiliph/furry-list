import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import AnimeItem from "../components/AnimeItem";
import Loading from "../components/Loading";
import SearchResults from "../components/SearchResults";
import AnimeSearchResult from "../types/AnimeSearchResult";
import { Anime } from "./../types/AnimeSearchResult";
import { useRouter } from "next/router";
export default function AnimeDetails() {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.id}</title>
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
            <main className="bg-gray-100"></main>
        </div>
    );
}
