import React from "react";
import { useEffect } from "react";
import { useAuthStore } from "../../hooks";
import useForm from "../../hooks/useForm";
import { LoginInterface, RegisterInterface } from "../../utils/interfaces/loginInterfaces";
import "./LoginPage.css";
import Swal from "sweetalert2";
import { Messages } from "../../utils/messagesApp";
import useToggle from "../../hooks/useToggle";
import { Button } from "primereact/button";

const loginInitialState: LoginInterface = {
	loginEmail: "",
	loginPassword: "",
};

const registerInitialState: RegisterInterface = {
	registerName: "",
	registerEmail: "",
	registerPassword: "",
	registerPassword2: "",
};

export const LoginPage = () => {
	const {
		loginEmail,
		loginPassword,
		onInputChange: onLoginInputChange,
	} = useForm(loginInitialState, {});
	const {
		registerName,
		registerEmail,
		registerPassword,
		registerPassword2,
		onInputChange: onRegisterInputChange,
	} = useForm(registerInitialState, {});
	const { startLogin, errorMessage, startRegister } = useAuthStore();
	const { state, toggle } = useToggle();


	const loginSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		startLogin({ correo: loginEmail, contrasena: loginPassword });
	};

	const registerSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		startRegister({
			registerName,
			registerEmail,
			registerPassword,
			registerPassword2,
		});
	};

	useEffect(() => {
		if (errorMessage && Object.keys(errorMessage).length > 0) {
			Swal.fire(Messages.ErrorAuth, errorMessage, "error");
		}
	}, [errorMessage]);
	
	const handleChangePage = () => {
		toggle();
	}
	return (
		<div className='container login-container '>
			<div className='row d-flex justify-content-center align-items-center'>
				{!state ? (
					<div className='col-md-6 login-form-1'>
						<h3>Ingreso</h3>
						<form onSubmit={loginSubmit}>
							<div className='form-group mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Correo'
									value={loginEmail}
									name='loginEmail'
									onChange={onLoginInputChange}
								/>
							</div>
							<div className='form-group mb-2'>
								<input
									type='password'
									className='form-control'
									placeholder='Contraseña'
									value={loginPassword}
									name='loginPassword'
									onChange={onLoginInputChange}
								/>
							</div>
							<div className='d-grid gap-2'>
								<input
									type='submit'
									className='btnSubmit'
									value='Login'
								/>
							</div>
						</form>
						<div
							className='container'
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<Button
								label='No tienes cuenta? Registrate'
								className='btn btnSubmit'
								style={{ width: "60%" }}
								onClick={handleChangePage}
							/>
						</div>
					</div>
				) : (
					<div className='col-md-6 login-form-2'>
						<h3>Registro</h3>
						<form onSubmit={registerSubmit}>
							<div className='form-group mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Nombre'
									value={registerName}
									name='registerName'
									onChange={onRegisterInputChange}
								/>
							</div>
							<div className='form-group mb-2'>
								<input
									type='email'
									className='form-control'
									placeholder='Correo'
									value={registerEmail}
									name='registerEmail'
									onChange={onRegisterInputChange}
								/>
							</div>
							<div className='form-group mb-2'>
								<input
									type='password'
									className='form-control'
									placeholder='Contraseña'
									value={registerPassword}
									name='registerPassword'
									onChange={onRegisterInputChange}
								/>
							</div>

							<div className='form-group mb-2'>
								<input
									type='password'
									className='form-control'
									placeholder='Repita la contraseña'
									value={registerPassword2}
									name='registerPassword2'
									onChange={onRegisterInputChange}
								/>
							</div>

							<div className='d-grid gap-2'>
								<input
									type='submit'
									className='btnSubmit'
									value='Crear cuenta'
								/>
							</div>
						</form>
						<div
							className='container'
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<Button
								label='Ya tienes cuenta? Inicia sesion'
								className='btn btnSubmit  '
								style={{ width: "60%", textDecoration: "none" }}
								onClick={handleChangePage}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
