import { environment } from "src/environments/environment";

const BASE_URL = environment.apiUrl;
export const API_URLS = {

    SEARCH: `${BASE_URL}/search`,
    DETAILS: `${BASE_URL}/search/details/`,
    ALL_COUNTRIES: `${BASE_URL}/search/countries`,
    STATES: `${BASE_URL}/search/states`,
    CITIES: `${BASE_URL}/search/cities`,
};