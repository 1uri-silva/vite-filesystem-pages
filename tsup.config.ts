import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	clean: true,
	sourcemap: true,
	splitting: false,
	format: ['cjs', 'esm'],
	dts: true,
});
