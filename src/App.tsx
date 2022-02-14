import React from 'react';
import Layout from './components/layout/Layout';
import AppRouter from './components/router/AppRouter';
import { ClientProvider } from './context/ClientContext';

function App() {
	return (
		<Layout>
			<ClientProvider>
				<AppRouter />
			</ClientProvider>
		</Layout>
	);
}

export default App;
