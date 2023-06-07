import process from 'process';
import virtual from '@rollup/plugin-virtual';

import type { Plugin } from 'vite';
import { makeModule } from './stringify';

const MODULE_NAME = ' virtual:vite-filesystem-pages';

const rollupInputOptions = {
	plugins: [virtual({ 'vite-filesystem-pages': makeModule(process.cwd()) })],
};

function createPlugin(): Plugin {
	return {
		name: 'vite-filesystem-pages',
		enforce: 'pre',
		apply: 'build',
		resolveId(source) {
			if (source === MODULE_NAME) {
				return source;
			}
			return null;
		},
		async load(id) {
			if (id) {
				return makeModule(process.cwd());
			}
			return null;
		},
	};
}

export { rollupInputOptions };
export default createPlugin;
