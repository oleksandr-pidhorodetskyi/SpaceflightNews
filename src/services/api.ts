import axios from 'axios';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/';
export const request = axios.create({
	baseURL: BASE_URL,
});
