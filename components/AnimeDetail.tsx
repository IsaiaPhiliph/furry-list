import Image from "next/image";
import { AnimeDetailsResult } from "../types/interfaces";

interface Props {
    data: AnimeDetailsResult;
}
function AnimeDetail({ data }: Props) {
    return (
        <div>
            <div>{data.title}</div>
            <Image src={data.image_url} layout="fill" />
        </div>
    );
}

export default AnimeDetail;
