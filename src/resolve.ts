import fg from 'fast-glob';
import { ResolverContext } from './types';

/**
 * Resolves the files that are valid pages for the given context.
 * @returns Promise<string[]>
 */
export async function resolve({
	dir,
	exclude,
}: ResolverContext): Promise<string[]> {
	return await fg(`${dir}/**/*.tsx`, {
		ignore: exclude
			? ['node_modules', '.git', ...exclude]
			: ['node_modules', '.git'],
		onlyFiles: true,
	});
}
