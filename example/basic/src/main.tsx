import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router';
import { router } from './routes';
import { routes } from 'vite-filesystem-pages';

import './index.css';
console.log(routes);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
