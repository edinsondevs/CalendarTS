import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getEnvVariables } from "./src/helpers/getEnvVariables";

const { VITE_API_URL_DEPLOY } = getEnvVariables();
// https://vitejs.dev/config/
export default defineConfig({
	/* BASE ES LA RUTA DEL PROYECTO PARA DESPLEGAR EN GITHUB PAGES */
	base: VITE_API_URL_DEPLOY,
	plugins: [react()],
});
