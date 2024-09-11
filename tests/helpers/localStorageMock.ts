export const localStorageMock = (() => {
	let store: { [key: string]: string } = {};

	return {
		getItem: (key: string): string | null => store[key] || null,
		setItem: (key: string, value: string): void => {
			store[key] = value.toString();
		},
		removeItem: (key: string): void => {
			delete store[key];
		},
		clear: () => {
			store = {};
		},
	};
})();
