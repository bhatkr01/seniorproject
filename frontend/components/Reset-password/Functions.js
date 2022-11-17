
import { useState } from "react";
import styles from "./Reset-password.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router';
import Link from 'next/link'
export function SetPassword() {
	const [fields, setFields] = useState({
		password: "",
		password2: "",
		token:"",
		uidb64:'',
	});
	const handleChange = (e) => {
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
	};
	

	const handleSubmit = async (event) => {
		event.preventDefault();
		setFields({token:router.query.token})
		setFields({uidb64:router.query.uidb64})
		const response = await fetcher(`accounts/new-password/${router.query.uidb64}/${router.query.token}`, "POST", 'application/json',JSON.stringify(fields));
		console.log(response);
		// router.push('/')
	};
	return 

	(
		<main className={styles.main}>
			<h1><a href="/" className={styles.marketplace}>Luther Marketplace</a></h1>
			<div className={styles.upperbody}>
			<div className={styles.welcomebox}>
			<br></br>
            <h1 className={styles.welcome}>Welcome Back</h1>
            <h2 className={styles.details}>Please enter your details.</h2>
			<form>
				<input className={styles.email}
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					required
					onChange={handleChange}
				/>
				<br></br>
				<input className={styles.email}
					type="password2"
					id="password2"
					name="password2"
					placeholder="Password Confirmation"
					required
					onChange={handleChange}
				/>
				<br></br>
				<button className={styles.submit} type="button" onClick={handleSubmit}>
					Send Reset Link
				</button>
			</form>
			</div>
        </div>
		</main>
				);
	}


export function Email() {
	const [fields, setFields] = useState({
		email: "",
	});
	const handleChange = (e) => {
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
	};
	

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetcher("accounts/request-password-reset/", "POST", 'application/json',JSON.stringify(fields));
		console.log(response);
		// router.push('/')
	};
	return 
		(
		<main className={styles.main}>
			<h1><a href="/" className={styles.marketplace}>Luther Marketplace</a></h1>
			<div className={styles.upperbody}>
			<div className={styles.welcomebox}>
			<br></br>
            <h1 className={styles.welcome}>Welcome Back</h1>
            <h2 className={styles.details}>Please enter your details.</h2>
			<form>
				<input className={styles.email}
					type="text"
					id="email"
					name="email"
					placeholder="Email"
					required
					onChange={handleChange}
				/>
				<br></br>
				<button className={styles.submit} type="button" onClick={handleSubmit}>
					Send Reset Link
				</button>
			</form>
			</div>
        </div>
		</main>
	)
}
