import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "./src/assets/styles/_variables.scss";
					@import "./src/assets/styles/_animations.scss";
					@import "./src/assets/styles/_mixins.scss";
				`
			}
		}
	}
});
