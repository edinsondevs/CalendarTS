import { AuthState } from "../../src/utils/interfaces/authInterfaces";

export const initialState = {
		status: "checking", // checking, not-authenticated, authenticated
		user: {},
		errorMessage: undefined, //
	} as AuthState;


export const authenticatedState = {
	status: "authenticated", // checking, not-authenticated, authenticated
	user: {
        uid: "123",
        nombre: "Eduardo",
        email: "jvO2T@example.com"
    },
	errorMessage: undefined, //
} as AuthState;

export const notAuthenticatedState = {
	status: "not-authenticated", // checking, not-authenticated, authenticated
	user: {},
	errorMessage: undefined, //
} as AuthState;