export const getEnvVariables = () => {
    // console.log(import.meta.env);

    return {
		// ...import.meta.env
		VITE_API_URL: import.meta.env.VITE_API_URL,
		VITE_MODE_DEV: import.meta.env.DEV,
		VITE_API_URL_PRD: import.meta.env.VITE_API_URL_PRD,
	};
}