import { stringifyRoute } from '../src/stringify';

describe('test files system directories', () => {
	it('should be able to empty directory', () => {
		const { routes } = stringifyRoute(`${process.cwd()}/example/basic`);
		expect(routes).toEqual([]);
	});

	it('should be able to return route object', () => {
		const pageDir = `${process.cwd()}/example/basic/src/pages`;
		const { routes } = stringifyRoute(pageDir);
		expect(routes).toEqual([
			`{ path: 'layout', element: () => import('${pageDir}/layout.tsx'), children: [{ path: '/', element: undefined }] }`,
			`{ path: 'page', element: undefined, children: [{ path: '/', element: () => import('${pageDir}/page.tsx') }] }`,
		]);
	});
});
