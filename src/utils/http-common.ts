import axios from 'axios';

const http = axios.create({
	baseURL: 'https://restaurant-api.olmax.site',
	headers: {
		'Content-type': 'application/json',
	},
});

export default http;
