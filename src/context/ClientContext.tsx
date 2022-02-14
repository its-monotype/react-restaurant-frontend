import React from 'react';
import { IClient } from '../utils/types';

export type ClientContextType = {
	client: IClient | null;
	setClient: (Client: IClient) => void;
};

export const ClientContext = React.createContext<ClientContextType>({
	client: null,
	setClient: (client) => console.warn('no client provider'),
});

export const ClientProvider: React.FC = ({ children }) => {
	const [client, setClient] = React.useState<IClient | null>(null);

	return <ClientContext.Provider value={{ client, setClient }}>{children}</ClientContext.Provider>;
};
