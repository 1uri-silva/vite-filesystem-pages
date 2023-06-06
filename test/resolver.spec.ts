import { stringifyRoute } from '../src/stringify';

describe('test files system directories', () => {
	it('should be able to empty directory', () => {
		const { routes } = stringifyRoute(`${process.cwd()}/example/basic`);
		expect(routes).toEqual([]);
	});

	it('should be able to empty directory', () => {
		const { routes } = stringifyRoute(`${process.cwd()}/example/basic`);
		expect(routes).toEqual([]);
	});
});
