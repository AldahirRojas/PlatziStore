import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
		<div className="MyAccount-container">
			<h1 className="title">My account</h1>
			<form action="/" className="form">
			<div>
				<label htmlFor="name" className="label">
				Name
				<p className="value">Camila Yokoo</p>
				</label>
				<label htmlFor="email" className="label">
				Email
				<p className="value">camilayokoo@gmail.com</p>
				</label>
				<label htmlFor="password" className="label">
				Password
				<p className="value">*********</p>
				</label>
			</div>
			<input type="submit" value="Edit" className="secondary-button login-button" />
			</form>
		</div>
		</div>
  );
};

export default MyAccount;
