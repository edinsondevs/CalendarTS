import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from "../../../src/store";
import { authenticatedState, initialState, notAuthenticatedState } from "../../__fixtures__/authStates";
import { testUserCredencial } from "../../__fixtures__/testUser";

describe('Pruebas en el authSlice', () => {

    test('debe de regresar el estado inicial', () => {
        const state = authSlice.getInitialState();
        expect(state).toEqual(initialState);
    });

    test('debe de autenticar el usuario', () => {
        
        const state = authSlice.reducer( initialState, onLogin(testUserCredencial) );
        expect(state.status).toBe('authenticated');
        expect(state.user).toEqual(testUserCredencial);
        expect(state.errorMessage).toBe(undefined);
    });

    test('debe de cerrar sesion del usuario', () => {

        const state = authSlice.reducer( authenticatedState, onLogout(notAuthenticatedState) );
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: notAuthenticatedState
        })
    });

    test('debe de cerrar sesion del usuario mostrando un error', () => {
        const errorMessage = 'No se pudo cerrar la sesion'
        const state = authSlice.reducer( authenticatedState, onLogout(errorMessage) );
        expect(state).toEqual({
			status: "not-authenticated",
			user: {},
			errorMessage: errorMessage,
		});
    });

    test('debe limpiar el mensaje de error del state', () => {
        const errorMessage = "No se pudo cerrar la sesion";
        const state = authSlice.reducer(
			authenticatedState,
			onLogout(errorMessage)
		);        
        const newState = authSlice.reducer(state, clearErrorMessage());
        expect(newState.errorMessage).toBe(undefined);
    });

    test('debe validar el onChecking', () => {
        const state = authSlice.reducer(authenticatedState, onChecking());
        expect(state.status).toBe('checking');
    });
})