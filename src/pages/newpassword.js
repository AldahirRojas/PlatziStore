import React from 'react';
import Image from 'next/image';
import styles from '@styles/NewPassword.module.scss';
import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
    return (
		<div className={styles.NewPassword}>
			<div className={styles.container}>
				<Image src={logo} alt="logo" width={300} height={100} />
				<h1 className={styles.title}>Create a new password</h1>
				<p className={styles.subtitle}>Enter a new passwrd for yue account</p>
				<form action="/" className={styles.form}>
					<label htmlFor="password" className={styles.label}>Password</label>
					<input type="password" id="password" placeholder="*********" className={styles.input} />
					<label htmlFor="new-password" className={styles.label}>New Password</label>
					<input type="password" id="new-password" placeholder="*********" className={styles.input} />
					<input type="submit" value="Confirm" className={styles.primaryButton} />
				</form>
			</div>
		</div>
    );
}

export default NewPassword;