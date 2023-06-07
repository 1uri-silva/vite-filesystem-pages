import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Page from 'vite-filesystem-pages';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), Page()],
});
