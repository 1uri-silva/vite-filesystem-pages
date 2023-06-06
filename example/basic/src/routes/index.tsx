import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../pages/layout';
import Home from '../pages/page';
import LayoutAuth from '../pages/auth/layout';
import Auth from '../pages/auth/page';
import Logon from '../pages/auth/logon/page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [{ element: <Home />, path: '/' }],
	},
	{
		path: '/layout',
		element: <RootLayout />,
		children: [{ element: undefined, path: undefined }],
	},
	{
		path: '/',
		element: <LayoutAuth />,
		children: [
			{
				element: <Auth />,
				path: 'auth',
			},
		],
	},
	{
		path: 'auth',
		element: <LayoutAuth />,
		children: [
			{
				element: <Logon />,
				path: 'logon',
			},
		],
	},
]);

export { router };
