import {AddProducts} from "../../components/Shop/";
import {useRouter} from "next/router";
import { fetcher } from "../../fetch/";
import useSWR from "swr";

export default function addproducts() {
		const router = useRouter();
		const { data, error } = useSWR([`products/${router.query.id}`, "GET"], fetcher);
	if (!data) return "I am loading";
	if (error) return "there is error";
	return (

		router.query.id?
		<AddProducts data={data} />
			:
		<AddProducts data='' />

	
	);
	}
