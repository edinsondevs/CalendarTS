export interface UserInterface {
	nombre: string;
	uid: string;
}

export interface AuthState {
	status: "checking" | "not-authenticated" | "authenticated";
	user: UserInterface;
	errorMessage: string | undefined;
}
export interface StateInterface {
	auth: AuthState;
}

export interface userCredentialsInterface {
	correo: string;
	contrasena: string;
	uid: string;
	nombre: string;
}