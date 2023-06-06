import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

import { ReactRouteBase } from './types';

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

		const object = {
			layout,
			page,
			name: name.split('.')[0],
			importPath: join(dir, page ? page : layout),
		};
		const router: ReactRouteBase[] = [];

		if (
			!directories.includes(object.name) ||
			!existsSync(join(dir, object.name, 'index.tsx'))
		) {
			router.push({
				path: object.name,
			});

			if (!!object.layout) {
				router.push({ element: object.layout });
			}
			router.push({
				children: [
					{
						path: '/',
						element: `import('/${object.importPath}')`,
					},
				],
			});
			routes.push(`{${router.join(', ')}}`);
		}
	}
	return { routes };
}

function makeModule(pageDir: string) {
	const { routes } = stringifyRoute(pageDir);

	return `export const routes = [${routes.join(', \n')}]`;
}

export { stringifyRoute, makeModule };
