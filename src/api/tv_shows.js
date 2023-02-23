// import axios from "axios"



import { fake_data } from "./sample_data";

export class TVShowApi{
    static async fetchPopular(){
        // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);
        // console.log(response.data.results);
        return fake_data;
    }

    static async fetchRecommendedShows(tvShowId){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY}`);
        console.log(response.data.results);
        return fake_data;
    }
}
