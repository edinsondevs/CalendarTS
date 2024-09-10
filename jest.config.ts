module.exports = {
	transformIgnorePatterns: [],

	// ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
	moduleNameMapper: {
		"\\.(css|less)$": "<rootDir>/tests/mocks/styleMock.js",
	},
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};

