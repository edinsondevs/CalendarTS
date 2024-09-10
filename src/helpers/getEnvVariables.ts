export const getEnvVariables = () => {
    // console.log(import.meta.env);

    return {
		// ...import.meta.env
		VITE_API_URL: import.meta.env.VITE_API_URL,
		DEV: import.meta.env.DEV,
		VITE_API_URL_PRD: import.meta.env.VITE_API_URL_PRD,
	};
}