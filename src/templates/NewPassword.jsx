import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import '@styles/NewPassword.scss';

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<Image src={logo} alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className="form">
					<label for="password" className="label">
						Password
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</label>
					<label for="new-password" className="label">
						Password
						<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					</label>
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
};

export default NewPassword;
