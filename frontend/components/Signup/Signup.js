import { useState } from "react";
import styles from "./Signup.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Signup({data}) {
	const router=useRouter()
	const [fields, setFields] = useState({
		email: data?data.email:'',
		first_name: data?data.first_name:'',
		last_name: data?data.last_name:'',
		class_status: data?data.class_status:'',
		password: '',
		password2: '',
	});
	const [errors, setErrors] = useState({})
	const handleChange = (e) => {
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
	};
	

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (validation()){
		const response = await fetcher("accounts/", "POST", 'application/json',JSON.stringify(fields));
		console.log(response);
		// localStorage.setItem('access_token', response.access);
		// localStorage.setItem('refresh_token', response.refresh)
		router.push('/')
		}
	};

const validation=()=>{
	      let activeItem= fields;
	      let errors = {};
	      let isValid = true;
	  
	  
	      if (!activeItem["email"]) {
		isValid = false;
		errors["email"] = "Please enter your email Address.";
	      }
	      if (!activeItem["first_name"]) {
		isValid = false;
		errors["first_name"] = "Please enter your First Name.";
	      }
	      if (!activeItem["last_name"]) {
		isValid = false;
		errors["last_name"] = "Please enter your Last Name.";
	      }
	      if (!activeItem["class_status"]) {
		isValid = false;
		errors["class_status"] = "Please enter your Class Status.";
	      }
	      if (!activeItem["password"]) {
		isValid = false;
		errors["password"] = "Please enter your Password.";
	      }
	  
	      if (typeof activeItem["password"] !== "undefined" && typeof activeItem["password2"] !== "undefined") {
		  
		if (activeItem["password"] !== activeItem["password2"]) {
		  isValid = false;
		  errors["password2"] = "Passwords don't match.";
		}
	      } 
	setErrors(errors)
	  
	      return isValid;
	  }

	return (
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
			<div>{errors.email}</div>
				<br></br>
				<input className={styles.first_name}
					type="text"
					id="first_name"
					name="first_name"
					placeholder="First Name"
					required
					onChange={handleChange}
				/>
			<div>{errors.first_name}</div>
				<br></br>

				<input className={styles.last_name}
					type="text"
					id="last_name"
					name="last_name"
					placeholder="Last Name"
					required
					onChange={handleChange}
				/>
			<div>{errors.last_name}</div>
				<br></br>
				<input className={styles.class_status}
					type="text"
					id="class_status"
					name="class_status"
					placeholder="Class Status"
					required
					onChange={handleChange}
				/>
			<div>{errors.class_status}</div>
				<br></br>
				<input className={styles.password}
					type="password"
					placeholder="Password"
					id="password"
					name="password"
					required
					onChange={handleChange}
				/>
			<div>{errors.password}</div>
				<br></br>
				<input className={styles.password}
					type="password"
					placeholder="Password Confirmation"
					id="password2"
					name="password2"
					required
					onChange={handleChange}
				/>
			<div>{errors.password2}</div>
				<br></br>
				<button className={styles.submit} type="button" onClick={handleSubmit}>
					Sign UP
				</button>
            	<h4 className={styles.h4txt}>Have an account?

	  <Link className={styles.linklayer1} href="/login">
			Sign In
	  </Link>
		</h4>
			</form>
			</div>
        </div>
		<div className={styles.imghalf}>
        	<img className={styles.structure} src="https://ak1.ostkcdn.com/images/products/is/images/direct/99e2126500ab99264a06f7bd2ddf7112a46dcb21/Art-Leon-Mid-century-3-seat-Sofa.jpg"></img>
    	</div>
		</main>
	);
}
