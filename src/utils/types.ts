export interface IClient {
	id: string;
	name: string | null;
	reviews: IReview[];
	tableNum: string | null;
}

export interface IWaiter {
	name: string;
	age: number;
}

export interface IReview {
	name: string;
	phone: string;
	content: string;
	tableNum: string;
}

export interface ITable {
	isOrdered: boolean;
	waiter: IWaiter;
	client: IClient;
}
