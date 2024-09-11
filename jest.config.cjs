// module.exports = {
// 	transformIgnorePatterns: [],
// 	testEnvironment: "jsdom",
// 	// ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
// 	moduleNameMapper: {
// 		"\\.(css|less)$": "<rootDir>/tests/mocks/styleMock.js",
// 	},
// 	transform: {
// 		"^.+\\.(ts|tsx)$": "ts-jest",
// 	},
// };

module.exports = {
	transformIgnorePatterns: [],
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['./jest.setup.ts'],
		moduleNameMapper: {
			"\\.(css|less)$": "<rootDir>/tests/mocks/styleMock.ts",
		},
		transform: {
			"^.+\\.(ts|tsx)$": "ts-jest",
		},
};