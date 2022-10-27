import { useState } from "react";
import styles from "./Shop.module.css";
import {fetcher,fetcher1} from "../../fetch/";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from 'next/image'

export default function Login() {
	const router=useRouter()

	const { data, error } = useSWR("products/", fetcher1);
	console.log(data)
	if (!data) return "I am loading"
	if (error) return "there is error"
	// const [fields, setFields] = useState({
	// 	email: "",
	// 	password: "",
	// fetch("http://127.0.0.1:8000/api/products", {
	// 	method: 'GET',
	// })
	// 	.then((res) => res.json())
 // .then((data) => console.log(data))
	// 	.catch((error) => {
	// 		console.error("Error:", error);
	// 	});
// });
	return (
		<div>
			<p>this is products page	</p>
		<ul>
		{data.map((product)=> (
			<li key={product.id}>
			{product.product_name}
			<Image
			src={`${product.product_picture}`}
width={500}
      height={500}
			/>
			{product.product_description}
			</li>
		))}
		</ul>
		</div>
			
	)
}
