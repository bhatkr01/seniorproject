import { useRouter } from "next/router";
import { fetcher } from "../../fetch/";
import useSWR from "swr";
import Image from 'next/image'

const Post = () => {
	const router = useRouter();
	const { id } = router.query;
	const { data, error } = useSWR([`products/${id}`, "GET"], fetcher);
	if (!data) return "I am loading";
	if (error) return "there is error";

	const editProduct = (event) => {
		event.preventDefault();
		router.push({
			pathname:'/add-products',
			query:{id:id},
		})
	};
	const deleteProduct = (event) => {
		event.preventDefault();

		const response = fetcher(`products/${id}`, "DELETE", '','');
		router.push({
			pathname:'/shop',
		})
	};
	return (
		<>
		<div>
			{data.product_name}
			<Image
			src={`${data.product_picture}`}
loading="eager" priority={true}
		alt={data.product_description}
width={500}
      height={500}
			/>
			{data.product_description}
		</div>
		<div>

				<button type="button" onClick={editProduct}>
					Edit Product
				</button>
				<button type="button" onClick={deleteProduct}>
					Delete Product
				</button>
		</div>
		</>
	)
};

export default Post;
