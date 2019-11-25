import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key:"431b0e6914f0d76c694586db7524acef",
        language:"en-US"
    }

});

export const moviesApi ={
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params:{
            append_to_response:"videos"
        }
    }),
    search: (term) =>
        api.get("search/movie", {
            params: {
                query:encodeURIComponent(term)  // %20문자열이 들어오면 공백이되기때문에 인코딩 작업 
            }

    })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => api.get(`tv/${id}`, {
        params:{
            append_to_response:"videos"
        }
    }),
    search: (term) =>
    api.get("search/tv", {
        params: {
            query:encodeURIComponent(term)  // %20문자열이 들어오면 공백이되기때문에 인코딩 작업 
        }

})
}

export default api;