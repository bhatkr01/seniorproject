export * from './AddProducts.js';
import styles from "./Shop.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from 'next/image'
import AddProducts from "./AddProducts.js";
import Link from 'next/link'

export function Shop() {
	const router=useRouter()
	
	const { data, error } = useSWR(["products/","GET"], fetcher);
	if (!data) return "I am loading"
	if (error) return "there is error"

	const addProducts = (event) => {
		event.preventDefault();
		router.push('/add-products')
	};

	return (
		<div>
			<p>this is products page	</p>
		<div>

				<button type="button" onClick={addProducts}>
					Add Products
				</button>
		</div>
		<ul>
		{data.map((product)=> (
			<li key={product.id}>
			<Link href={`/shop/${product.id}`}>
			{product.product_name}
			</Link>
			<Image
			src={`${product.product_picture}`}
loading="eager" priority={true}

		alt={product.product_description}
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
