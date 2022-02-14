export interface IClient {
	name: string;
	reviews: IReview[];
	tableNum: string;
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
