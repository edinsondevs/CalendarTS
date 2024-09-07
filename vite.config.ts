import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { urlDeploy } from './variables';

export default defineConfig({
	/* BASE ES LA RUTA DEL PROYECTO PARA DESPLEGAR EN GITHUB PAGES */
	base: urlDeploy,
	plugins: [react()],
});
