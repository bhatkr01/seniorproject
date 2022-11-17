import { useState } from "react";
import styles from "./Shop.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from 'next/image'

export function AddProducts({data}) {
	const router=useRouter()
	// console.log(data)
	const [fields, setFields] = useState({

		product_author: data?data.product_author:'',
		product_name: data?data.product_name:'',
		product_picture: data?data.product_picture:'',
		product_description: data?data.product_description:'',
		product_condition: data?data.product_condition:'',
		product_action: data?data.product_action:'',
		product_price: data?data.product_price:'',
		product_date: data?data.product_date:'',
	});
	const handleChange = (e) => {
	console.log(data)
		if (e.target.name=="product_picture"){
		setFields({
			...fields,
			[e.target.name]: e.target.files[0],
		});
		}
			else{
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
			}
	};
	

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(fields)
		let form_data=new FormData();
		form_data.append('product_author',fields.product_author);
		form_data.append('product_name',fields.product_name);
		form_data.append('product_picture',fields.product_picture, fields.product_picture.name);
		form_data.append('product_description',fields.product_description);
		form_data.append('product_condition',fields.product_condition);
		form_data.append('product_action',fields.product_action);
		form_data.append('product_price',fields.product_price);
		form_data.append('product_date',fields.product_date);
		const response = await fetcher("products/", "POST", '',form_data);

		router.push('/shop')
	};

	return (
		<main className={styles.main}>
			<form>
				<label htmlFor="author">Author</label>
				<input
					type="text"
					id="author"
					name="product_author"
					required
					onChange={handleChange}
					value={data?data.product_author:fields.product_author}
				/>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="product_name"
					value={data?data.product_name:fields.product_name}
					required
					onChange={handleChange}
				/>
				<label htmlFor="picture">Picture</label>
				<input
					type="file"
					id="picture"
					name="product_picture"
					// value={data?data.product_picture:''}
					required
					onChange={handleChange}
				/>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					id="description"
					name="product_description"
					value={data?data.product_description:fields.product_description}
					required
					onChange={handleChange}
				/>
				<label htmlFor="condition">Condition</label>
				<input
					type="text"
					id="condition"
					name="product_condition"
					required
					value={data?data.product_condition:fields.product_condition}
					onChange={handleChange}
				/>
				<label htmlFor="action">Action</label>
				<input
					type="text"
					id="action"
					name="product_action"
					value={data?data.product_action:fields.product_action}
					required
					onChange={handleChange}
				/>
				<label htmlFor="price">Price</label>
				<input
					type="Number"
					id="price"
					name="product_price"
					value={data?data.product_price:fields.product_price}
					required
					onChange={handleChange}
				/>
				<label htmlFor="date">Date</label>
				<input
					type="date"
					id="date"
					name="product_date"
					value={data?data.product_date:fields.product_date}
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
