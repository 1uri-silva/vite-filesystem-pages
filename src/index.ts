import process from 'process';

import type { Plugin } from 'vite';
import { makeModule } from './stringify';

const VIRTUAL_MODULE_ID = 'filesystem-pages';
const PLUGIN_NAME = 'vite-filesystem-pages';

function createPlugin(): Plugin {
	return {
		name: PLUGIN_NAME,
		resolveId(id: string) {
			if (id === VIRTUAL_MODULE_ID) return `\0${VIRTUAL_MODULE_ID}`;
		},

		async load() {
			return makeModule(process.cwd());
		},
	};
}

export default createPlugin;
