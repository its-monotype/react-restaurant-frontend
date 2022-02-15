import React from 'react';

export type ClientContextType = {
	tableNum: string | null;
	clientId: string | null;
	setTableNum: (tableNum: string) => void;
	setClientId: (clientId: string) => void;
};

export const ClientContext = React.createContext<ClientContextType>({
	tableNum: null,
	clientId: null,
	setTableNum: (tableNum) => console.warn('no tableNum provider'),
	setClientId: (clientId) => console.warn('no clientId provider'),
});

export const ClientProvider: React.FC = ({ children }) => {
	const [tableNum, setTableNum] = React.useState<string | null>(null);
	const [clientId, setClientId] = React.useState<string | null>(null);

	return (
		<ClientContext.Provider value={{ tableNum, clientId, setTableNum, setClientId }}>
			{children}
		</ClientContext.Provider>
	);
};
