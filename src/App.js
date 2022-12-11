import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTimeoutFn } from './utils';
import MainLayout from 'layouts/MainLayout';
import Loading from 'pages/Loading';

const App = () => {
	const [router, setRouter] = useState(
		createBrowserRouter([
			{
				path: '/',
				element: <Loading />,
			},
		])
	);

	useTimeoutFn(() => {
		setRouter(
			createBrowserRouter([
				{
					path: '/',
					element: <MainLayout />,
				},
			])
		);
	}, 1000);

	return <RouterProvider router={router} />;
};

export default App;
