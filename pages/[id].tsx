import Head from "next/head";
import { useRouter } from "next/router";
import { getAnimeDetails } from "../hooks/api";
import { GetStaticPaths } from "next";
import AnimeDetail from "../components/AnimeDetail";
import { AnimeDetailsResult } from "../types/interfaces";
export default function AnimeDetails({ data }) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{data.title}</title>
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
                {data.status === 404 ? (
                    <p>No se ha podido encontrar ese anime</p>
                ) : (
                    <AnimeDetail data={data} />
                )}
            </main>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async (): Promise<{
    paths: any;
    fallback: any;
}> => {
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } },
            { params: { id: "4" } },
        ],
        fallback: "blocking",
    };
};

export async function getStaticProps({ params }) {
    const { id } = params;
    const data: AnimeDetailsResult = await getAnimeDetails(id);
    return {
        props: { data },
    };
}
