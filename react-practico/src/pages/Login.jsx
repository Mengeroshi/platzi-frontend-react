import React from 'react';
import '../styles/Login.css';

import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
	const form = React.useRef(null);
	 
	const handleSubmit = (event) =>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button onClick={handleSubmit} type="submit"className="primary-button login-button"> Log in </button>
					<a href="/">Forgot my password</a>
				</form> 
				<button  className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export  {Login};