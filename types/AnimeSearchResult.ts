export interface Anime {
    mal_id: number;
    url: string;
    image_url: string;
    title: string;
    airing: Boolean;
    synopsis: string;
    type: string;
    episodes: number;
    score: number;
    start_date: string;
    end_date: string;
    members: number;
    rated: string;
}
export default interface AnimeSearchResult {
    request_hash: string;
    request_cached: Boolean;
    request_cache_expiry: number;
    results: Anime[];
    last_page: number;
}
