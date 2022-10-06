import Head from "next/head";
import {useState} from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
// import instance from "../../fetch"
import axios from "axios"

export default function Login() {
	const [fields, setFields]=useState({
		email:"",
		password:"",
	})
	const handleChange = e => {
		setFields({
			...fields,
			[e.target.name]:e.target.value
		})
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(fields)
		// console.log(fetch("/token",fields))
		const response=axios.post("http://127.0.0.1:8000/api/token/", {email:"bhatkr01@luther.edu", password:"hidjango"},
			{
			headers:{
				"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):null,
	'Content-Type': 'application/json',
			}
			}
	)
		console.log(response)

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
					<button type="button" onClick={handleSubmit}>Submit</button>
				</form>
			</main>

	);
}
