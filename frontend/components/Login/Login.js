import { useState } from "react";
import styles from "./Login.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router'

export default function Login() {
	const router=useRouter()
	const [fields, setFields] = useState({
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
	};
	

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetcher("token/", "POST", 'application/json',JSON.stringify(fields));
		console.log(response);
		localStorage.setItem('access_token', response.access);
		localStorage.setItem('refresh_token', response.refresh)
		router.push('/')
	};

	return (
		<main className={styles.main}>
			<form>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					name="email"
					required
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					required
					onChange={handleChange}
				/>
				<button type="button" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</main>
	);
}
