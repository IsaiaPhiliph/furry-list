interface Anime {
    mal_id: Number;
    url: String;
    image_url: String;
    title: String;
    airing: Boolean;
    synopsis: String;
    type: String;
    episodes: Number;
    score: Number;
    start_date: String;
    end_date: String;
    members: Number;
    rated: String;
}
export interface Response {
    request_hash: String;
    request_cached: Boolean;
    request_cache_expiry: Number;
    results: Anime[];
    last_page: Number;
}
