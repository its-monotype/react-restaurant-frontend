import http from '../utils/http-common';

class DataService {
	createClient(tableNum: string) {
		return http.post<{ id: string }>('/clients', { tableNum });
	}
	callWaiter(clientId: string, tableNum: string) {
		return http.post<void>('/call-waiter', { clientId, tableNum });
	}
	negativeReview(clientId: string, tableNum: string, name: string, phone: string, content: string) {
		return http.post<void>('/review/negative', { clientId, tableNum, name, phone, content });
	}
}
export default new DataService();
