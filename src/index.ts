import process from 'process';
import { root_src_page } from './utils';

import type { Plugin } from 'vite';
import { Options, UserOptions } from './types';
import { makeModule } from './stringify';

const MODULE_NAME = ' virtual:vite-filesystem-pages';

function createPlugin(userOptions: UserOptions = {}): Plugin {
	const options: Options = {
		root: process.cwd(),
		pageDir: root_src_page,
		...userOptions,
	};

	return {
		name: 'page-filesystem',
		enforce: 'pre',
		apply: 'build',
		configResolved(config) {
			options.root = config.root;
		},

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

export type * from './types';
export default createPlugin;
