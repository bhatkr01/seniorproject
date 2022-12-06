import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { fetcher } from "../../fetch/";
import useSWR from "swr";

import Image from 'next/image'

export default function UserProfile() {
	const [user_id, setUser_id] = useState(0)

 useEffect(() => {
if (typeof window !== 'undefined') {
	{localStorage.getItem('access_token')?setUser_id(jwt_decode(localStorage.getItem('access_token')).user_id):null}
}
  }, []); 

	const { data:products, error:product_error } = useSWR(["products/", "GET"], fetcher);
	const { data:user, error:user_error } = useSWR([`accounts/${user_id}`, "GET"], fetcher);
	
	if (!user ) return "I am loading";
	if (user_error) return "there is error";
console.log(products)
console.log(user)


	

	return (
		<>
		
		<h1>hi {user_id}</h1>
		<h1>hi {user.email}</h1>
		{products.map((product)=>(

			<div key={product.id}>
			{product.product_author==user_id?
				<>
				<Image
		src={`${product.product_picture}`}
					width={500}
					height={500} />
			<p >{product.product_description}</p>
		<p ><h1>{product.product_condition}</h1></p>
		    <p >{product.product_price}</p>

				</>
				:""}
			
						</div>
					))}
		</>
			
	)
}
