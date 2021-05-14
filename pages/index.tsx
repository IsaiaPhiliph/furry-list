import Head from "next/head";
import { useState } from "react";

export default function Home() {
    const [results, setResults] = useState(null);
    return (
        <div>
            <Head>
                <title>Mi furry list</title>
                <meta
                    name="description"
                    content="The best Anime and Manga community"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <form>
                    <input type="text" placeholder="Search any Anime" />
                    <button type="submit">Search</button>
                </form>
                <div>
                    <h1>Results</h1>
                </div>
            </main>
        </div>
    );
}
