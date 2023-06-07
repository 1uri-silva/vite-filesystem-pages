import { readdirSync } from 'node:fs';

function stringifyRoute(dir: string) {
	let routes = [];

	const siblings = readdirSync(dir, {
		withFileTypes: true,
	});

	const files = siblings
		.filter((file) => file.isFile() && file.name.endsWith('.tsx'))
		.map((file) => file.name);

	const directories = siblings
		.filter((files) => files.isDirectory())
		.map((directory) => directory.name);

	for (const name of files) {
		const filePage = name.match(/page.tsx$/);
		const fileLayout = name.match(/layout.tsx$/);

		const layout = fileLayout ? fileLayout[0] : '';
		const page = filePage ? filePage[0] : '';

		const objectRoute = {
			layout,
			page,
			name: name.split('.')[0],
			importPath: dir,
		};

		const router = [];

		router.push(`path: '${objectRoute.name}'`);
		router.push(
			`element: ${
				objectRoute.layout
					? `() => import('${objectRoute.importPath}/${objectRoute.layout}')`
					: undefined
			}`
		);
		router.push(
			`children: [{ path: '/', element: ${
				objectRoute.page
					? `() => import('${objectRoute.importPath}/${objectRoute.page}')`
					: undefined
			} }]`
		);
		routes.push(`{ ${router.join(', ')} }`);
	}
	return { routes };
}

function makeModule(pageDir: string) {
	const { routes } = stringifyRoute(pageDir);

	return `export const routes = [${routes.join(', \n')}]`;
}

export { stringifyRoute, makeModule };
