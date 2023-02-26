import axios from "axios"



//import { fake_data, FAKE_RECOMMENDATIONS } from "./sample_data";
import {BASE_URL, API_KEY} from "../config.js"

export class TVShowApi{
    static async fetchPopular(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);
        console.log(response.data.results);
        return response.data.results
        //return fake_data;
    }

    static async fetchRecommendedShows(tvShowId){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY}`);
        console.log(response.data.results);
        return response.data.results;

       //return FAKE_RECOMMENDATIONS;
    }

    static async fetchByTitle(title){
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY}&query=${title}`);
        console.log(response.data.results);
        return response.data.results;

        
    }
}
