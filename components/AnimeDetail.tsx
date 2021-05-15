import { AnimeDetailsResult } from "../types/interfaces";

interface Props {
    data: AnimeDetailsResult;
}
function AnimeDetail({ data }: Props) {
    return (
        <div>
            <div>{data.title}</div>
        </div>
    );
}

export default AnimeDetail;
