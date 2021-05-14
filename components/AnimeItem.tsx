import Image from "next/image";
import { Anime } from "./../types/AnimeSearchResult";
import Link from "next/link";
interface Props {
    result: Anime;
}
const AnimeItem = ({ result }: Props) => {
    return (
        <Link href={`/${result.mal_id}`}>
            <div className="w-full flex transform sm:hover:scale-105 flex-col space-y-3 hover:ring bg-white shadow-md py-4 rounded-md items-start transition-all hover:shadow-lg">
                <h2 className="px-4">{result.title}</h2>
                <div className="flex w-full h-0 pt-[100%] relative">
                    <Image
                        src={result.image_url}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="px-4 font-thin">{result.synopsis}</div>
                {result.score > 5 && (
                    <div className="px-4 flex space-x-1">
                        <span>Rating:</span>
                        <div className="text-green-600 font-bold">
                            {result.score}
                        </div>
                    </div>
                )}
                {result.score < 5 && (
                    <div className="px-4 flex space-x-1">
                        <span>Rating:</span>
                        <div className="text-red-600 font-bold">
                            Rating: {result.score}
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
};
export default AnimeItem;
