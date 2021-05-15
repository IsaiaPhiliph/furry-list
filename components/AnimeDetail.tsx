import Image from "next/image";
import { AnimeDetailsResult } from "../types/interfaces";

interface Props {
    data: AnimeDetailsResult;
}
function AnimeDetail({ data }: Props) {
    return (
        <div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-x-4 sm:p-4">
                <div className="relative w-full h-[30vh] sm:w-44 sm:h-44 sm:min-w-[11rem] group">
                    <Image
                        src={data.image_url}
                        layout="fill"
                        objectFit="cover"
                        className="sm:rounded-[50%] sm:group-hover:rounded-xl transition-all duration-500"
                    />
                </div>
                <div className="flex flex-col max-w-full">
                    <div className="text-xl text-center uppercase font-bold">
                        {data.title}
                    </div>
                    <div className="text-center font-light">
                        Episodes: {data.episodes} ({data.duration})
                    </div>
                    <div className="text-center font-light">
                        Status: {data.status}
                    </div>
                    <div className="max-w-full">{data.synopsis}</div>
                </div>
            </div>
        </div>
    );
}

export default AnimeDetail;
